import React from 'react';
import { View, StyleSheet } from 'react-native';
import WaveBar from './WaveBar';
import { theme } from '../utils/useTheme';
import { moderateScale } from '../utils/Responsives';

interface WaveformProps {
  meteringArray: number[];
}

const getBarHeight = (db: number) => {
  const MIN_DB = -60;
  const MAX_DB = 0;
  const normalized = (db - MIN_DB) / (MAX_DB - MIN_DB);
  const SILENCE_THRESHOLD = 0.05;
  if (normalized < SILENCE_THRESHOLD) return 6;
  return normalized * 80;
};

const Waveform: React.FC<WaveformProps> = ({ meteringArray }) => {
  return (
    <View style={styles.container}>
      {meteringArray.map((db, index) => (
        <WaveBar key={index} height={getBarHeight(db)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:300,
    flexDirection: 'row-reverse',
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
