import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { theme } from '../utils/useTheme';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from '../utils/Responsives';
import { CloudBtnProps } from '../../../AwesomeProject/src/types/type';

const CloudBtn: React.FC<CloudBtnProps> = ({
  bgColor,
  icon,
  title,
  onAction,
}) => {
  return (
    <TouchableOpacity
      onPress={onAction}
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <SvgIcon xmlPath={icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CloudBtn;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    width: '100%',
    borderRadius: 148,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: verticalScale(12),
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
});
