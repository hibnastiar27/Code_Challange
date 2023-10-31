import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {fontType, colors} from '../theme';

const ParticipantTop = ({data}) => {
  return (
    <View style={Most.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <View style={Most.card}>
          <View>
            <Image
              style={Most.image}
              source={{
                uri: 'https://codedesign.dev/_next/image?url=%2Ftwitter-embed.png&w=1920&q=75',
              }}
            />
          </View>

          <View style={Most.row}>
            <View>
              <Text style={Most.h2}>{data.title}</Text>
              <View style={Most.row}>
                <Text style={Most.p}>{data.date}</Text>
                <Text style={Most.p}>{data.participant} Participant</Text>
              </View>
            </View>
            <Text style={Most.btn}>View Challange</Text>
          </View>
        </View>
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
