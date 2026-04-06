import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { Xmls } from '../utils/Xmls';
import { theme } from '../utils/useTheme';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from '../utils/Responsives';
import { LogoutButtonProps } from '../../../AwesomeProject/src/types/type';

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <SvgIcon xmlPath={Xmls.LogoutIcon} />
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.lightColor.primary,
    height: verticalScale(55),
    borderRadius: moderateScale(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: verticalScale(30),
    columnGap: verticalScale(10),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: theme.fontFamily.DMSansMedium,
  },
});
