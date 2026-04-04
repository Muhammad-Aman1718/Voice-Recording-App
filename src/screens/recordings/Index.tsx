import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import RecordingCard from '../../components/RecordingCard';
import { styles } from './Style';
import { Text, View } from 'react-native';

const Recordings = () => {
  return (
    <View style={styles.container}>
      <Header showArrow={true} showProfile={true} />
      <View style={styles.recordingsContainer}>
        <Text style={styles.allRecordingText}>All Recording</Text>
        <SearchBar />
        <View style={styles.statsContainer}>
          <RecordingCard route="Recording" uploaded={true} />
          <RecordingCard route="Recording" uploaded={true} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
          <RecordingCard route="Recording" uploaded={false} />
        </View>
      </View>
    </View>
  );
};

export default Recordings;
