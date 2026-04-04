import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Responsives";
import { theme } from "../../utils/useTheme";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  recordingsContainer: {
    flex: 1,
    marginTop: verticalScale(24),
    rowGap: 20,
    marginHorizontal: horizontalScale(20),
  },
  allRecordingText: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
  statsContainer: {
    flex: 1,
    rowGap: 15,
  },
});
