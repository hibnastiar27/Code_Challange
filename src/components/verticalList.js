import React from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const VerticalList = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('Details', {blogId: item.id})}>
      <View style={styles.flex}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View>
          <Text style={styles.h2}>{item.title}</Text>
          <Text style={styles.p}>{item.date}</Text>
          <Text style={styles.p}>{item.participant} Participant</Text>
        </View>
      </View>
      <Text style={styles.txtBox} backgroundColor={colors.green(0.1)}>
        {item.status}
      </Text>
    </TouchableOpacity>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'flex-start',
    width: 160,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flex: {
    gap: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  h2: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    textAlign: 'left',
  },
  p: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(0.5),
  },
  txtBox: {
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(0.5),
  },
});
