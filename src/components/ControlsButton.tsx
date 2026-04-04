import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { moderateScale, verticalScale } from '../utils/Responsives';
import { theme } from '../utils/useTheme';

interface ControlsButtonProps {
  bgColor?: string;
  icon: string;
  title?: string;
  onAction?: () => void;
}
const ControlsButton: React.FC<ControlsButtonProps> = ({
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

export default ControlsButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 148,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: verticalScale(12),
    paddingVertical: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
});
