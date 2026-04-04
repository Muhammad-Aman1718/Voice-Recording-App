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
    // backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  welcomeText: {
    fontSize: moderateScale(24),
    fontFamily: theme.fontFamily.DMSansSemiBold,
    color: theme.lightColor.authInputText,
    marginTop: verticalScale(24),
  },
  readyText: {
    fontSize: moderateScale(16),
    fontFamily: theme.fontFamily.DMSansRegular,
    color: theme.lightColor.textColor,
    marginTop: verticalScale(5),
  },
  recordButton: {
    padding: 10,
    height: verticalScale(74),
    marginVertical: verticalScale(24),
    overflow: 'hidden',
  },
  overviewContainer: {},
  overviewText: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansSemiBold,
    color: theme.lightColor.black,
    marginBottom: 15,
  },
  statsContainer: {
    rowGap: 15,
  },
  recordingsContainer: {
    marginTop: verticalScale(24),
    rowGap: 20,
  },
  allRecordingText: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansSemiBold,
    color: theme.lightColor.black,
  },
});
