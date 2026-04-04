import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Xmls } from '../utils/Xmls';
import SvgIcon from '../assets/icons/SvgIcon';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Responsives';
import { theme } from '../utils/useTheme';

const Timer = () => {
  return (
    <View style={styles.timerRow}>
      <SvgIcon xmlPath={Xmls.BlackDotIcon} />
      <Text style={styles.timerText}>00:00.00</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: moderateScale(28),
    fontFamily: theme.fontFamily.DMSansSemiBold,
    color: theme.lightColor.black,
    marginLeft: horizontalScale(10),
  },
});
