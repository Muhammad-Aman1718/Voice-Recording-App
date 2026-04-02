import { createTheming } from '@callstack/react-theme-provider';

export const theme = {
  lightColor: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#262E7A',
  },
  darkColor: {},
  fontFamily: {
    ManropeBold: 'Manrope-Bold',
    ManropeMedium: 'Manrope-Medium',
    ManropeRegular: 'Manrope-Regular',
    ManropeSemiBold: 'Manrope-SemiBold',
  },
  animation: {
    scale: 1.0,
  },
};

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme };
