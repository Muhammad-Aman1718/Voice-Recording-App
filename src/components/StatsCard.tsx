import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import RadialGradient from 'react-native-radial-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from '../utils/Responsives';
import { theme } from '../utils/useTheme';

interface StatsCardProps {
  title?: string;
  number?: string;
  icon?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, number, icon }) => {
  return (
    <RadialGradient
      colors={['#262E7A', '#0B1463']}
      radius={300}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <SvgIcon xmlPath={icon!} />
    </RadialGradient>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  container: {
    height: 108,
    borderWidth: 1,
    borderColor: theme.lightColor.statCardBorderColor,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textContainer: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: moderateScale(20),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.white,
  },
  numberText: {
    fontSize: moderateScale(25),
    color: theme.lightColor.white,
    fontFamily: theme.fontFamily.DMSansMedium,
  },
});
