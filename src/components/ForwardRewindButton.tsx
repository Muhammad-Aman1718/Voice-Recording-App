import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { theme } from '../utils/useTheme';

interface ForwardRewindButtonProps {
  icon: string;
}

const ForwardRewindButton: React.FC<ForwardRewindButtonProps> = ({ icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <SvgIcon xmlPath={icon} />
    </TouchableOpacity>
  );
};

export default ForwardRewindButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightColor.bgColor,
    padding: 17.14,
    borderRadius: 50,
  },
});
