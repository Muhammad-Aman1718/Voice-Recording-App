import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ICONS } from '../constant/Data';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Responsives';
import { theme } from '../utils/useTheme';

const MyCustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              activeOpacity={0.8}
              style={[
                styles.tabItem,
                isFocused ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              <SvgIcon xmlPath={ICONS[route.name]} />

              {isFocused && <Text style={styles.labelText}>{label}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyCustomTabBar;

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.lightColor.screenBg,
    marginVertical: verticalScale(10),
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: horizontalScale(20),
    borderRadius: moderateScale(200),
    padding: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(50),
  },
  activeTab: {
    backgroundColor: theme.lightColor.primary,
    borderRadius: moderateScale(148),
    paddingHorizontal: horizontalScale(18),
    flex: 1.5,
  },
  inactiveTab: {
    backgroundColor: theme.lightColor.primary,
    width: moderateScale(48),
    borderRadius: moderateScale(148),
    marginHorizontal: horizontalScale(5),
  },
  labelText: {
    color: theme.lightColor.white,
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(8),
    fontFamily: theme.fontFamily.DMSansBold,
  },
});
