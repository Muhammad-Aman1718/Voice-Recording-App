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
    marginTop: verticalScale(30),
    rowGap: 15,
  },
  topContainer: {
    justifyContent: 'center',
  },
  cloudButton: {
    marginBottom: 15,
  },

  controlsContainer: {
    width: '100%',
    alignItems: 'center',
  },

  buttonWrapper: {
    width: '100%',
  },
  buttonControlsWrapper: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 15,
  },
  audioTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  audioTitle: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
  recordButton: {
    flex: 1,
    padding: 10,
    height: verticalScale(74),
    marginVertical: verticalScale(24),
    overflow: 'hidden',
  },

  playButtons: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
