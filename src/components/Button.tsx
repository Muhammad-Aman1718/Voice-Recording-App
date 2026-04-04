import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { theme } from '../utils/useTheme';
import { horizontalScale, moderateScale } from '../utils/Responsives';

interface ButtonProps {
  textColor?: string;
  bgColor?: string;
  title?: string;
  onPress?: () => void;
}

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
