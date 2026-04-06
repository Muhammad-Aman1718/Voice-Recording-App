import React from 'react';
import AudioLine from './AudioLine';
import SvgIcon from '../assets/icons/SvgIcon';
import { Xmls } from '../utils/Xmls';
import { theme } from '../utils/useTheme';
import { moderateScale } from '../utils/Responsives';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RecordingCardProps } from '../../../AwesomeProject/src/types/type';

const RecordingCard: React.FC<RecordingCardProps> = ({ route, uploaded }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        {route && (
          <TouchableOpacity>
            <SvgIcon
              xmlPath={uploaded ? Xmls.CloudDoneIcon : Xmls.CloudUploadIcon}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>Recording 1 at 01:20 PM</Text>
        <TouchableOpacity>
          <SvgIcon xmlPath={Xmls.PlayIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateTime}>
        <Text style={styles.date}>18 December</Text>
        <Text style={styles.date}>03:03 sec</Text>
      </View>
      <AudioLine />
    </View>
  );
};

export default RecordingCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: moderateScale(20),
    backgroundColor: theme.lightColor.profileMenuItemBg,
    rowGap: 15,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: theme.fontFamily.DMSansMedium,
    color: theme.lightColor.black,
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.DMSansRegular,
    color: theme.lightColor.dateTextColor,
  },
});
