import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AuthInput from '../../components/AuthInput';
import { theme } from '../../utils/useTheme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsives';
import { IMGS } from '../../constant/Imgs';
import SvgIcon from '../../assets/icons/SvgIcon';
import { Xmls } from '../../utils/Xmls';
import Button from '../../components/Button';
import { styles } from './Style';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={IMGS.Logo} style={styles.logoImg} />
      <View style={styles.authContainer}>
        <Text style={styles.loginText}>Login to your account</Text>
        <View style={styles.inputContainer}>
          <AuthInput
            label="Email"
            placeholder="mail@email.com"
            keyboardType="email-address"
            error="Enter a valid email" // Error dikhane ke liye
            // onChangeText={text => console.log(text)}
          />

          <AuthInput
            label="Password"
            placeholder="********"
            isPassword={true} // Is se eye icon aur security enable hogi
            // onChangeText={text => console.log(text)}
          />
        </View>
        <Text style={styles.forgottenText}>Forgotten Password?</Text>
        <View style={styles.rememberContainer}>
          <View style={styles.tickIcon}>
            <SvgIcon xmlPath={Xmls.TickIcon} />
          </View>
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <View style={styles.loginBtn}>
          <Button
            title="Login"
            bgColor={theme.lightColor.buttonBg}
            textColor={theme.lightColor.white}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
