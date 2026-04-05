import React from 'react';
import { StyleSheet, Text, View, type DimensionValue } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Responsives';
import { theme } from '../utils/useTheme';

interface AudioProgressBarProps {
  currentTime?: string; // e.g., "00:00"
  duration?: string; // e.g., "05:47"
  progress?: number; // 0 se 1 ke darmiyan (e.g., 0.5 for 50%)
}

const AudioProgressBar: React.FC<AudioProgressBarProps> = ({
  currentTime,
  duration,
  progress = 0,
}) => {
  const progressPercent = `${Math.min(
    Math.max(progress * 100, 0),
    100,
  )}%` as DimensionValue;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.track}>
        <View style={[styles.progressLine, { width: progressPercent }]} />
        <View style={[styles.thumb, { left: progressPercent }]} />
      </View>

      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.timeText}>{duration}</Text>
      </View>
    </View>
  );
};

export default AudioProgressBar;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    marginTop: 10,
  },
  track: {
    height: verticalScale(6),
    backgroundColor: theme.lightColor.trackBgColor,
    borderRadius: 2,
    position: 'relative',
    justifyContent: 'center',
  },
  progressLine: {
    height: '100%',
    backgroundColor: theme.lightColor.primary,
    borderRadius: 50,
  },
  thumb: {
    width: moderateScale(6),
    height: verticalScale(36),
    backgroundColor: theme.lightColor.primary,
    position: 'absolute',
    borderRadius: 6,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  timeText: {
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
});
