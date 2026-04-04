import { createTheming } from '@callstack/react-theme-provider';

export const theme = {
  lightColor: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#262E7A',
    screenBg: '#F5F5F5',
    buttonBg: '#1C1B67',
    loginScreenBg: '#FAFAFA',
    ProfileIconBg: '#1A2461',
    searchbarPlaceholderTextColor: '#606060',
    textColor: '#616161',
    authInputText: '#282828',
    authInputBorder: '#E3E3E3',
    errorTextColor: '#F14336',
    loginTextColor: '#333333',
    bgColor: '#E6E6E6',
    stopBgolor: '#FF9191',
    continueBgolor: '#4AFFB9',
    trackBgColor: '#D1D5DB',
    profileMenuItemBg: '#E8E8E8',
    dateTextColor: '#717171',
    searchBarBorderColor: '#D9D9D9',
    searchBarTextColor: '#111827',
    statCardBorderColor: '#262E7A33',
  },
  darkColor: {},
  fontFamily: {
    DMSansBold: 'DMSans-Bold',
    DMSansMedium: 'DMSans-Medium',
    DMSansRegular: 'DMSans-Regular',
    DMSansSemiBold: 'DMSans-SemiBold',
  },
  animation: {
    scale: 1.0,
  },
};

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme };
