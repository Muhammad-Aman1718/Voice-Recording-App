import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ControlsButton from './ControlsButton';
import { theme } from '../utils/useTheme';
import { Xmls } from '../utils/Xmls';

interface AudioControlsButtonsProps {
  isRecordingOn?: boolean;
}

const AudioControlsButtons: React.FC<AudioControlsButtonsProps> = (
  {
    // isRecordingOn,
  },
) => {
  const [isRecordingOn, setIsRecordingOn] = useState(true);

  return (
    <View style={styles.playButtons}>
      {isRecordingOn ? (
        <ControlsButton
          title="Pause"
          bgColor={theme.lightColor.bgColor}
          icon={Xmls.PauseIcon}
          onAction={() => setIsRecordingOn(!isRecordingOn)}
        />
      ) : (
        <ControlsButton
          title="Continue"
          bgColor={theme.lightColor.continueBgolor}
          icon={Xmls.PauseIcon}
          onAction={() => setIsRecordingOn(!isRecordingOn)}
        />
      )}
      <ControlsButton
        title="Stop"
        bgColor={theme.lightColor.stopBgolor}
        icon={Xmls.StopIcon}
        onAction={() => console.log('stop btn')}
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
