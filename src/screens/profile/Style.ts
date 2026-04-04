import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsives';
import { theme } from '../../utils/useTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: verticalScale(30),
  },
  imageContainer: {
    width: moderateScale(68),
    height: moderateScale(68),
    borderRadius: moderateScale(50),
    backgroundColor: theme.lightColor.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
    borderWidth: 2,
    borderColor: '#0000001A',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(50),
  },
  userName: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
  menuContainer: {
    marginTop: verticalScale(20),
    rowGap: horizontalScale(20),
  },
});
