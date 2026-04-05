import { useState } from 'react';
import { statusTypes } from '../utils/Types';
import Sound, { type PlayBackType } from 'react-native-nitro-sound';

const useAudioRecording = () => {
  const [status, setStatus] = useState<statusTypes>('recording');
  const [soundPath, setSoundPath] = useState<string | null>(null);
  const [isRecordingOn, setIsRecordingOn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayTime, setDisplayTime] = useState('00:00:00');
  const [currentPosition, setCurrentPosition] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const [isPaused, setIsPaused] = useState(false);
  const [metering, setMetering] = useState<number[]>(Array(40).fill(-60));

  const handleStartRecording = async () => {
    try {
      Sound.setSubscriptionDuration(0.1);
      let lastUpdate = 0;

      Sound.addRecordBackListener(e => {
        const now = Date.now();
        if (now - lastUpdate < 80) return;
        lastUpdate = now;

        setDisplayTime(Sound.mmssss(Math.floor(e.currentPosition)));

        const newLevel = e.currentMetering ?? -60;

        setMetering(prev => {
          const updated = [...prev];
          updated.pop(); // last remove
          updated.unshift(newLevel); // new add front
          return updated;
        });
      });

      await Sound.startRecorder(undefined, undefined, true);

      setStatus('recording');
      console.log('Recording started...');
    } catch (error) {
      console.error('Start Recording Error:', error);
    }
  };
  const handlePauseRecording = () => {
    Sound.pauseRecorder();
    setIsRecordingOn(!isRecordingOn);
    console.log('handlePauseRecording ================>');
  };
  const handleContinueRecording = () => {
    Sound.resumeRecorder();
    setIsRecordingOn(!isRecordingOn);
    console.log('handleContinueRecording  =======> ');
  };

  const handleStopRecording = async () => {
    try {
      const record = await Sound.stopRecorder();
      Sound.removeRecordBackListener();
      setSoundPath(record);
      setStatus('finished');
      setDuration(displayTime);
      setPlayTime('00:00:00');
      console.log('Recording stopped.');
    } catch (error) {
      console.error('Stop Recording Error:', error);
    }
  };

  const handleTogglePlayback = async () => {
    if (!soundPath) return;

    try {
      if (isPlaying && !isPaused) {
        await Sound.pausePlayer();
        setIsPlaying(false);
        setIsPaused(true);
        console.log('Audio Paused');
        return;
      }

      if (isPaused) {
        await Sound.resumePlayer();
        setIsPlaying(true);
        setIsPaused(false);
        console.log('Audio Resumed');
        return;
      }

      Sound.addPlayBackListener((e: PlayBackType) => {
        setCurrentPosition(e.currentPosition);
        setTotalDuration(e.duration);
        setPlayTime(Sound.mmssss(Math.floor(e.currentPosition)));
      });

      Sound.addPlaybackEndListener(() => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentPosition(0);
        setPlayTime('00:00:00');
        Sound.removePlayBackListener();
        Sound.removePlaybackEndListener();
      });

      await Sound.startPlayer(soundPath);
      setIsPlaying(true);
      setIsPaused(false);
      if (currentPosition > 0) {
        setTimeout(async () => {
          await Sound.seekToPlayer(currentPosition);
        }, 100);
      }
    } catch (error) {
      console.error('Toggle Playback Error:', error);
    }
  };

  const handleStopPlayer = async () => {
    Sound.stopPlayer();
    setIsPlaying(false);
    Sound.removePlayBackListener();
    Sound.removePlaybackEndListener();
  };

  const handleForward = async () => {
    try {
      const nextPosition = currentPosition + 5000;
      if (isPlaying || isPaused) {
        await Sound.seekToPlayer(Math.min(nextPosition, totalDuration));
      }
      setCurrentPosition(nextPosition);
      setPlayTime(Sound.mmssss(Math.floor(nextPosition)));
    } catch (error) {
      console.error('Forward Error:', error);
    }
  };

  const handleRewind = async () => {
    try {
      const prevPosition = Math.max(currentPosition - 5000, 0);
      if (isPlaying || isPaused) {
        await Sound.seekToPlayer(Math.min(prevPosition, totalDuration));
      }
      setCurrentPosition(prevPosition);
      setPlayTime(Sound.mmssss(Math.floor(prevPosition)));

      console.log('Rewinded to:', prevPosition);
    } catch (error) {
      console.error('Rewind Error:', error);
    }
  };

  return {
    status,
    isRecordingOn,
    isPlaying,
    displayTime,
    currentPosition,
    totalDuration,
    playTime,
    isPaused,
    duration,
    metering,
    handleStartRecording,
    handleStopRecording,
    handlePauseRecording,
    handleContinueRecording,
    // handlePlayRecording,
    // handlePausePlayer,
    // handleResumePlayer,
    handleTogglePlayback,
    handleStopPlayer,
    handleForward,
    handleRewind,
  };
};

export default useAudioRecording;
