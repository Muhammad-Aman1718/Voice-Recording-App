import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from '../utils/useTheme';
import { moderateScale, verticalScale } from '../utils/Responsives';

const AudioLine = () => {
  return <View style={styles.line}></View>;
};

export default AudioLine;


const styles = StyleSheet.create({
  line: {
    width: '100%',
    backgroundColor: theme.lightColor.primary,
    height: 6,
    borderRadius: moderateScale(6),
  },
});