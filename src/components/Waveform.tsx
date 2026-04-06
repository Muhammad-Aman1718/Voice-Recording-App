import React from 'react';
import WaveBar from './WaveBar';
import { theme } from '../utils/useTheme';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../utils/Responsives';
import { WaveformProps } from '../../../AwesomeProject/src/types/type';

const getBarHeight = (db: number) => {
  const MIN_DB = -60;
  const MAX_DB = 0;
  const normalized = (db - MIN_DB) / (MAX_DB - MIN_DB);
  const SILENCE_THRESHOLD = 0.05;
  if (normalized < SILENCE_THRESHOLD) return 6;
  return normalized * 80;
};

const BAR_WINDOW = 30;

const Waveform: React.FC<WaveformProps> = ({
  meteringArray,
  progress = 0,
  isRecording = false,
}) => {
  let barsToRender: number[] = [];

  if (isRecording) {
    barsToRender = meteringArray;
  } else {
    const currentIndex = Math.floor(progress * meteringArray.length);

    const visibleBars = meteringArray.slice(
      Math.max(0, currentIndex - BAR_WINDOW),
      currentIndex,
    );

    barsToRender = [
      ...Array(BAR_WINDOW - visibleBars.length).fill(-60),
      ...visibleBars,
    ];
  }

  return (
    <View
      style={[
        styles.container,
        { flexDirection: isRecording ? 'row-reverse' : 'row' },
      ]}
    >
      {barsToRender.map((db, index) => (
        <WaveBar key={index} height={getBarHeight(db)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.lightColor.bgColor,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
});

export default Waveform;
