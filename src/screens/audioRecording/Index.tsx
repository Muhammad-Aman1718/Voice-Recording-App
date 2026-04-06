import React, { useState } from 'react';
import Header from '../../components/Header';
import { View } from 'react-native';
import { NavigationProps, statusTypes } from '../../utils/Types';
import { styles } from './style';
import AudioControlsButtons from '../../components/AudioControlsButtons';
import Waveform from '../../components/Waveform';
import Timer from '../../components/Timer';
import AudioTitle from '../../components/AudioTitle';
import RecordButton from '../../components/RecordButton';
import ControlsButton from '../../components/ControlsButton';
import { theme } from '../../utils/useTheme';
import { Xmls } from '../../utils/Xmls';
import AudioProgressBar from '../../components/AudioProgressBar';
import ForwardRewindButton from '../../components/ForwardRewindButton';
import RadialGradient from 'react-native-radial-gradient';
import useAudioRecording from '../../hooks/useAudioRecording';
import AudioLine from '../../components/AudioLine';
import WaveBar from '../../components/WaveBar';
import CloudBtn from '../../components/CloudBtn';

const AudioRecording: React.FC<NavigationProps> = ({ navigation }) => {
  const {
    status,
    isRecordingOn,
    isPlaying,
    displayTime,
    currentPosition,
    totalDuration,
    playTime,
    duration,
    isPaused,
    metering,
    recordedWave,
    handleStartRecording,
    handleStopRecording,
    handlePauseRecording,
    handleContinueRecording,
    handleTogglePlayback,
    handleStopPlayer,
    handleForward,
    handleRewind,
  } = useAudioRecording();


  return (
    <View style={styles.container}>
      <Header
        showArrow={true}
        showProfile={true}
        arrowOnPress={() => navigation.goBack()}
      />

      {status === 'idle' && (
        <View style={styles.idleStatus}>
          <View style={[styles.audioLineContainer]}>
            <AudioLine />
          </View>
          <Timer timer={displayTime} />
          <RecordButton onAction={handleStartRecording} />
        </View>
      )}

      {status === 'recording' && (
        <View style={styles.idleStatus}>
          <AudioTitle />
          <Waveform meteringArray={metering} isRecording={true}/>
          <Timer timer={displayTime} />
          <AudioControlsButtons
            pauseRecording={handlePauseRecording}
            continueRecording={handleContinueRecording}
            stopRecording={handleStopRecording}
            isRecordingOn={isRecordingOn}
          />
        </View>
      )}

      {status === 'finished' && (
        <View style={styles.finishedStatus}>
          {/* <CloudBtn
            title="Uploaded"
            bgColor={theme.lightColor.bgColor}
            icon={Xmls.CloudDoneIcon}
          /> */}
          <AudioTitle />
          <Waveform
            meteringArray={recordedWave!}
            progress={currentPosition / totalDuration}
          />

          <AudioProgressBar
            progress={totalDuration > 0 ? currentPosition / totalDuration : 0}
            currentTime={playTime}
            duration={duration}
          />
          <View style={styles.playButtons}>
            <ForwardRewindButton
              onAction={handleRewind}
              icon={Xmls.RewindButton}
            />
            <RadialGradient
              colors={['#e0e1e7', '#9295b04d']}
              radius={0}
              style={[styles.playButton, { borderRadius: 148 }]}
            >
              <ControlsButton
                // Icon Logic: Agar playing hai to Pause icon, warna Play/Continue icon
                icon={
                  isPlaying
                    ? Xmls.PauseIcon
                    : isPaused
                    ? Xmls.ContinueIcon
                    : Xmls.PlayIcon
                }
                // Title Logic
                title={isPlaying ? 'Pause' : isPaused ? 'Resume' : 'Play'}
                bgColor={theme.lightColor.white}
                onAction={handleTogglePlayback} // Single function call
              />
            </RadialGradient>
            <ForwardRewindButton
              onAction={handleForward}
              icon={Xmls.ForwardButton}
            />
          </View>
          <CloudBtn
            title="Upload to Cloud"
            bgColor={theme.lightColor.continueBgolor}
            icon={Xmls.UploadIcon}
          />
        </View>
      )}
    </View>
  );
};

export default AudioRecording;
