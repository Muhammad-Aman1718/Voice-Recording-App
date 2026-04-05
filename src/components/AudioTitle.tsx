import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { Xmls } from '../utils/Xmls';
import { moderateScale } from '../utils/Responsives';
import { theme } from '../utils/useTheme';

const AudioTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recording 1 at 01:20 PM</Text>
      <TouchableOpacity>
        <SvgIcon xmlPath={Xmls.DeleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default AudioTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
});
