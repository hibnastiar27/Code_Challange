import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {formatDate} from '../utils/formatDate';

const ParticipantTop = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={Most.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <TouchableOpacity
          style={Most.card}
          onPress={() => navigation.navigate('Details', {blogId: data?.id})}>
          <View>
            <FastImage
              style={Most.image}
              source={{
                uri: data?.image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <View style={Most.row}>
            <View>
              <Text style={Most.h2}>{data?.title}</Text>
              {console.log(data?.id)}
              <View style={Most.row}>
                <Text style={Most.p}>{formatDate(data?.createdAt)}</Text>
                <Text style={Most.p}>{data?.participant} Participant</Text>
              </View>
            </View>
            <Text style={Most.btn}>View Challange</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ParticipantTop;

const Most = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    borderBottomColor: '#ABFFCD',
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
    textAlign: 'left',
    marginRight: 10,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    width: 360,
    backgroundColor: '#FAFFFC',
    borderRadius: 10,
  },
  image: {
    alignSelf: 'center',
    width: 340,
    height: 172.66,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    textAlignVertical: 'center',
    backgroundColor: '#ABFFCD',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 8,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 12,
    color: colors.black(),
  },
});
