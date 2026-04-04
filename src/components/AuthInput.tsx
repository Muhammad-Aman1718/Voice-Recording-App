import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { theme } from '../utils/useTheme'; // Aapka theme file
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Responsives';
import { Xmls } from '../utils/Xmls';
import SvgIcon from '../assets/icons/SvgIcon';

interface AuthInputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  error,
  isPassword,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor={theme.lightColor.textColor}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.iconContainer}
          >
            <SvgIcon
              xmlPath={isPasswordVisible ? Xmls.EyeOpenIcon : Xmls.EyeCloseIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: moderateScale(16),
    fontFamily: theme.fontFamily.DMSansRegular,
    color: theme.lightColor.authInputText,
    marginBottom: verticalScale(5),
    marginLeft: horizontalScale(10),
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: theme.lightColor.white,
    borderWidth: 1,
    borderColor: theme.lightColor.authInputBorder,
    borderRadius: moderateScale(25),
    paddingHorizontal: horizontalScale(20),
    height: verticalScale(50),
  },
  input: {
    flex: 1,
    color: theme.lightColor.black,
    fontSize: moderateScale(16),
    fontFamily: theme.fontFamily.DMSansRegular,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorText: {
    color: theme.lightColor.errorTextColor,
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.DMSansMedium,
    marginTop: verticalScale(4),
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
