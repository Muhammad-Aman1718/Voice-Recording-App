import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { Xmls } from '../utils/Xmls';
import { theme } from '../utils/useTheme';
import { moderateScale, verticalScale } from '../utils/Responsives';

interface RecordButtonProps {
  onAction?: () => void;

}

const RecordButton: React.FC<RecordButtonProps> = ({ onAction }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onAction}>
      <SvgIcon xmlPath={Xmls.MicIcon} />
      <Text style={styles.text}>Record</Text>
    </TouchableOpacity>
  );
};

export default RecordButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightColor.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: verticalScale(12),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(148),
    width: '100%',
  },
  text: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.white,
  },
});
