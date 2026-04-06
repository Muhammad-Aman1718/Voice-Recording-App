import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { Xmls } from '../utils/Xmls';
import { theme } from '../utils/useTheme';
import { StyleSheet, Text, View } from 'react-native';
import { horizontalScale, moderateScale } from '../utils/Responsives';
import { TimerProps } from '../../../AwesomeProject/src/types/type';

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <View style={styles.timerRow}>
      <SvgIcon xmlPath={Xmls.BlackDotIcon} />
      <Text style={styles.timerText}>{timer}</Text>
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
