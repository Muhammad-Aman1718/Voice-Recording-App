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
  idleStatus: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(30),
    rowGap: 15,
    alignItems: 'center',
  },

  finishedStatus: {
    flex: 1,
    width: '100%',
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(30),
    rowGap: 15,
    alignItems: 'center',
  },
  audioLineContainer: {
    flex: 5,
    width: '100%',
    backgroundColor: theme.lightColor.bgColor,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  waveformContainer: {
    borderWidth: 1,
    width: '100%',
    flex: 1,
    height: 400,
  },
  playButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  },
  playButton: {
    flex: 1,
    padding: 10,
    overflow: 'hidden',
  },
});
