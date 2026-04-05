import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ControlsButton from './ControlsButton';
import { theme } from '../utils/useTheme';
import { Xmls } from '../utils/Xmls';

interface AudioControlsButtonsProps {
  isRecordingOn?: boolean;
  stopRecording?: () => void;
  pauseRecording?: () => void;
  continueRecording?: () => void;
}

const AudioControlsButtons: React.FC<AudioControlsButtonsProps> = ({
  stopRecording,
  pauseRecording,
  continueRecording,
  isRecordingOn,
}) => {
  return (
    <View style={styles.playButtons}>
      {isRecordingOn ? (
        <ControlsButton
          title="Pause"
          bgColor={theme.lightColor.bgColor}
          icon={Xmls.PauseIcon}
          onAction={pauseRecording}
        />
      ) : (
        <ControlsButton
          title="Continue"
          bgColor={theme.lightColor.continueBgolor}
          icon={Xmls.PauseIcon}
          onAction={continueRecording}
        />
      )}
      <ControlsButton
        title="Stop"
        bgColor={theme.lightColor.stopBgolor}
        icon={Xmls.StopIcon}
        onAction={stopRecording}
      />
    </View>
  );
};

export default AudioControlsButtons;

const styles = StyleSheet.create({
  playButtons: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
