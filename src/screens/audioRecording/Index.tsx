import React, { useState } from 'react';
import SvgIcon from '../../assets/icons/SvgIcon';
import AudioLine from '../../components/AudioLine';
import RecordButton from '../../components/RecordButton';
import Header from '../../components/Header';
import { Xmls } from '../../utils/Xmls';
import { theme } from '../../utils/useTheme';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProps, statusTypes } from '../../utils/Types';
import ControlsButton from '../../components/ControlsButton';
import AudioProgressBar from '../../components/AudioProgressBar';
import ForwardRewindButton from '../../components/ForwardRewindButton';
import RadialGradient from 'react-native-radial-gradient';
// import { styles } from './style';
import AudioControlsButtons from '../../components/AudioControlsButtons';
import Waveform from '../../components/Waveform';
import Timer from '../../components/Timer';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsives';

const AudioRecording: React.FC<NavigationProps> = ({ navigation }) => {
  const [status, setStatus] = useState<statusTypes>('idle'); // 'idle', 'recording', 'paused', 'finished'

  return (
    <View style={styles.container}>
      <Header
        showArrow={true}
        showProfile={true}
        arrowOnPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {/* <View style={styles.topContainer}>
          <View style={styles.cloudButton}>
            <ControlsButton
              title="Uploaded"
              bgColor={theme.lightColor.bgColor}
              icon={Xmls.CloudDoneIcon}
            />
          </View>
        </View> */}

        <Waveform />

        <Timer />
        <RecordButton />
        {/* <View style={styles.controlsContainer}>
          <View style={styles.controlsContainer}> */}
        {/* <AudioControlsButtons /> */}

        {/* <View style={styles.playButtons}>
              <ForwardRewindButton icon={Xmls.RewindButton} />
              <RadialGradient
                colors={['#262E7A', '#262E7A4D']}
                radius={0}
                style={[styles.recordButton, { borderRadius: 148 }]}
              >
                <ControlsButton
                  icon={Xmls.PlayIcon}
                  title="Play"
                  bgColor={theme.lightColor.white}
                />
              </RadialGradient>
              <ForwardRewindButton icon={Xmls.ForwardButton} />
            </View>
            <ControlsButton
              title="Upload to Cloud"
              bgColor={theme.lightColor.continueBgolor}
              icon={Xmls.UploadIcon}
            /> */}
        {/* </View>
        </View> */}
      </View>
    </View>
  );
};

export default AudioRecording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(30),
    rowGap: 15,
    alignItems: 'center',
  },
  topContainer: {
    justifyContent: 'center',
  },
  cloudButton: {
    marginBottom: 15,
  },

  controlsContainer: {
    width: '100%',
    alignItems: 'center',
  },

  buttonWrapper: {
    width: '100%',
  },
  buttonControlsWrapper: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 15,
  },
  audioTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  audioTitle: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
  recordButton: {
    flex: 1,
    padding: 10,
    height: verticalScale(74),
    marginVertical: verticalScale(24),
    overflow: 'hidden',
  },

  playButtons: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
