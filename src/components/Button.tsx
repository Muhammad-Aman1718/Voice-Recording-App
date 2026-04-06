import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../utils/useTheme';
import { moderateScale } from '../utils/Responsives';
import { ButtonProps } from '../../../AwesomeProject/src/types/type';

const Button: React.FC<ButtonProps> = ({
  title,
  bgColor,
  textColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: theme.lightColor.white,
    borderRadius: moderateScale(128),
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(16),
    fontFamily: theme.fontFamily.DMSansMedium,
  },
});
