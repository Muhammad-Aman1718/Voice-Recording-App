import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { IMGS } from '../../constant/Imgs';
import LinearGradient from 'react-native-linear-gradient';
import { verticalScale, horizontalScale } from '../../utils/Responsives';
import Button from '../../components/Button';
import { theme } from '../../utils/useTheme';
import type { NavigationProps } from '../../utils/Types';
import { styles } from './Style';

const SplashScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={IMGS.SplashBgImg}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(28, 27, 103, 0.8)', '#1C1B67']}
        style={styles.overlay}
      >
        <Image source={IMGS.Logo} style={styles.logo} resizeMode="contain" />

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            bgColor={theme.lightColor.white}
            textColor={theme.lightColor.buttonBg}
            onPress={() =>
              navigation.replace('AuthStack', { AuthStack: 'Login' })
            }
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SplashScreen;
