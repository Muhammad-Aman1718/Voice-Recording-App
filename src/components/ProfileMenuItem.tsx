import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { theme } from '../utils/useTheme';
import { moderateScale, verticalScale } from '../utils/Responsives';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProfileMenuItemProps } from '../../../AwesomeProject/src/types/type';

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  title,
  iconXml,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <SvgIcon xmlPath={iconXml} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightColor.profileMenuItemBg,
    borderRadius: moderateScale(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: verticalScale(10),

    padding: moderateScale(15),
  },
  titleText: {
    fontSize: moderateScale(16),
    color: theme.lightColor.black,
    fontFamily: theme.fontFamily.DMSansMedium,
  },
});
