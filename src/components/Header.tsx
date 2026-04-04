import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { Xmls } from '../utils/Xmls';
import { IMGS } from '../constant/Imgs';
import { theme } from '../utils/useTheme';
import { horizontalScale, verticalScale } from '../utils/Responsives';

interface HeaderProps {
  showArrow?: boolean;
  showProfile?: boolean;
  arrowOnPress?: () => void;
  profileOnPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showArrow,
  showProfile,
  arrowOnPress,
  profileOnPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showArrow && (
          <TouchableOpacity style={styles.iconButton} onPress={arrowOnPress}>
            <SvgIcon xmlPath={Xmls.LeftArrowIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.logoContainer} pointerEvents="none">
        <Image
          source={IMGS.HeaderImg}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.rightContainer}>
        {showProfile && (
          <TouchableOpacity style={styles.iconButton} onPress={profileOnPress}>
            <SvgIcon
              xmlPath={Xmls.ProfileIcon}
              color={theme.lightColor.ProfileIconBg}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.lightColor.white,
    paddingHorizontal: horizontalScale(20),
  },
  leftContainer: {
    zIndex: 1,
    minWidth: horizontalScale(40),
  },
  rightContainer: {
    zIndex: 1,
    minWidth: horizontalScale(40),
    alignItems: 'flex-end',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: horizontalScale(114),
    height: verticalScale(50),
  },
  iconButton: {
    padding: 5,
  },
});
