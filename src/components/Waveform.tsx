import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AudioLine from './AudioLine';
import { moderateScale, verticalScale } from '../utils/Responsives';
import { theme } from '../utils/useTheme';

const Waveform = () => {
  return (
    <View style={styles.waveformContainer}>
      <AudioLine />
    </View>
  );
};

export default Waveform;

const styles = StyleSheet.create({
  waveformContainer: {
    flex: 5,
    width: '100%',
    minHeight: verticalScale(180),
    maxHeight: verticalScale(400),
    backgroundColor: theme.lightColor.bgColor,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
