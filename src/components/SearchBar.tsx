import React from 'react';
import SvgIcon from '../assets/icons/SvgIcon';
import { StyleSheet, TextInput, View } from 'react-native';
import { Xmls } from '../utils/Xmls';
import { theme } from '../utils/useTheme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Responsives';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.iconContainer}>
        <SvgIcon xmlPath={Xmls.SearchIcon} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={theme.lightColor.searchbarPlaceholderTextColor}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.lightColor.searchBarBorderColor,
    borderRadius: moderateScale(100),
    paddingHorizontal: horizontalScale(15),
    height: verticalScale(42),
    marginVertical: verticalScale(10),
  },
  iconContainer: {
    marginRight: horizontalScale(10),
  },
  input: {
    flex: 1,
    color: theme.lightColor.searchBarTextColor,
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.DMSansRegular,
    height: '100%',
    padding: 0,
  },
});
