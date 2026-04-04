import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../utils/Responsives';

export const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: 6,
    width: horizontalScale(250),
    height: verticalScale(100),
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(20),
  },
});
