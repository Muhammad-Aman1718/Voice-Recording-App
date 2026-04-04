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
    backgroundColor: theme.lightColor.loginScreenBg,
    paddingHorizontal: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: horizontalScale(190),
    height: verticalScale(80),
    marginBottom: 60,
  },
  loginText: {
    fontSize: moderateScale(21),
    fontFamily: theme.fontFamily.DMSansBold,
    textAlign: 'center',
    color: theme.lightColor.loginTextColor,
    marginBottom: verticalScale(40),
  },
  authContainer: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    rowGap: horizontalScale(15),
  },
  forgottenText: {
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.DMSansMedium,
    textAlign: 'right',
    color: theme.lightColor.buttonBg,
    marginTop: verticalScale(5),
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(8),
    marginTop: verticalScale(5),
  },
  tickIcon: {
    backgroundColor: theme.lightColor.buttonBg,
    width: horizontalScale(18),
    height: verticalScale(18),

    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberText: {
    color: theme.lightColor.textColor,
    fontSize: moderateScale(14),
  },
  loginBtn: {
    marginTop: 40,
  },
});
