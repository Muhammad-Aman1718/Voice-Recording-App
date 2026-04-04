import React from 'react';
import Header from '../../components/Header';
import SvgIcon from '../../assets/icons/SvgIcon';
import LogoutButton from '../../components/LogoutButton';
import ProfileMenuItem from '../../components/ProfileMenuItem';
import { styles } from './Style';
import { Xmls } from '../../utils/Xmls';
import { Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header showArrow={true} showProfile={false} />

      <View style={styles.content}>
        <View style={styles.avatarSection}>
          <View style={styles.imageContainer}>
            <SvgIcon xmlPath={Xmls.LargeProfileIcon} />
          </View>
          <Text style={styles.userName}>James J.</Text>
        </View>

        <View style={styles.menuContainer}>
          <ProfileMenuItem title="Account Settings" iconXml={Xmls.GearIcon} />
          <ProfileMenuItem title="Recordings" iconXml={Xmls.RecordingIcon} />
        </View>

        <LogoutButton onPress={() => console.log('Logged Out')} />
      </View>
    </View>
  );
};

export default Profile;
