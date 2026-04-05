import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import StatsCard from '../../components/StatsCard';
import RecordButton from '../../components/RecordButton';
import LinearGradient from 'react-native-linear-gradient';
import RecordingCard from '../../components/RecordingCard';
import { Xmls } from '../../utils/Xmls';
import { styles } from './Style';
import { ScrollView, Text, View } from 'react-native';
import { NavigationProps } from '../../utils/Types';
import RadialGradient from 'react-native-radial-gradient';

const Home: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header showProfile={true} />
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome Back,</Text>
        <Text style={styles.readyText}>Ready to record your next audio?</Text>
        <RadialGradient
          colors={['#e0e1e7', '#9295b04d']}
          radius={0}
          style={[styles.recordButton, { borderRadius: 148 }]}
        >
          <RecordButton
            onAction={() => navigation.navigate('AudioRecording')}
          />
        </RadialGradient>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.overviewContainer}>
          <Text style={styles.overviewText}>Overview</Text>
          <View style={styles.statsContainer}>
            <StatsCard
              title="Total Recordings"
              number="25"
              icon={Xmls.StatCardMicIcon}
            />
            <StatsCard
              title="Total Duration"
              number="26:36s"
              icon={Xmls.StatCardHourGlassIcon}
            />
            <StatsCard
              title="Total Storage"
              number="28 MB"
              icon={Xmls.StatCardStorageIcon}
            />
          </View>
        </View>
        <View style={styles.recordingsContainer}>
          <Text style={styles.allRecordingText}>All Recording</Text>
          <SearchBar />
          <View style={styles.statsContainer}>
            <RecordingCard />
            <RecordingCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
