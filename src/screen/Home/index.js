import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {TopParticipant, Navbar, SearchBar} from '../../components';
import {listChallange, levelList} from '../../../data';
import {fontType, colors} from '../../../src/theme';

export default function Beranda() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CODE CHALLANGE.</Text>
      </View>

      <SearchBar />

      <View style={category.listCategory}>
        <LevelCategory />
      </View>

      <ScrollView>
        <Text style={styles.h1}>Most Participant</Text>
        <MostParticipant />
        <ListChallange />
      </ScrollView>

      <Navbar />
    </View>
  );
}

const ItemLevel = ({item, onPress, color, backgroundColor, fontWeight}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...category.item, backgroundColor}}>
        <Text style={{...category.title, color, fontWeight}}>
          {item.categoryName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const LevelCategory = () => {
  const [selected, setSelected] = useState(1);

  const renderItem = ({item}) => {
    const colorText = item.id === selected ? colors.black() : colors.grey(0.5);
    const colorBg = item.id === selected ? colors.green(0.5) : colors.white();
    const fontWeight = item.id === selected ? 'bold' : 'normal';
    return (
      <ItemLevel
        item={item}
        onPress={() => setSelected(item.id)}
        color={colorText}
        backgroundColor={colorBg}
        fontWeight={fontWeight}
      />
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={levelList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      contentContainerStyle={{paddingHorizontal: 20}}
    />
  );
};

const MostParticipant = () => {
  return <TopParticipant data={listChallange[0]} />;
};

const ListChallange = () => {
  return (
    <View style={List.container}>
      <Text style={List.h1}>All</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <View style={List.card}>
          <View>
            <Image
              style={List.image}
              source={{
                uri: 'https://codedesign.dev/_next/image?url=%2Fholadok.png&w=1920&q=75',
              }}
            />
          </View>

          <View style={List.row}>
            <View>
              <Text style={List.h2}>Holadok</Text>
              <Text style={List.p}>Jul 27, 2023</Text>
              <Text style={List.p}>16 Participant</Text>
            </View>
          </View>
        </View>
        <View style={List.card}>
          <View>
            <Image
              style={List.image}
              source={{
                uri: 'https://codedesign.dev/_next/image?url=%2Fal-nasr.png&w=1920&q=75',
              }}
            />
          </View>

          <View style={List.row}>
            <View>
              <Text style={List.h2}>Al Nasr</Text>
              <Text style={List.p}>Feb 25, 2023</Text>
              <Text style={List.p}>24 Participant</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#58FF9B',
    textAlign: 'center',
  },
  h1: {
    marginHorizontal: 24,
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
});

const category = StyleSheet.create({
  listCategory: {
    paddingVertical: 10,
    borderBottomColor: '#ABFFCD',
    borderBottomWidth: 1,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
});

const List = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 24,
    marginVertical: 10,
    borderBottomColor: '#ABFFCD',
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
    textAlign: 'left',
    marginRight: 10,
  },
  card: {
    width: 340 / 2,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FAFFFC',
    borderRadius: 10,
  },
  image: {
    width: 300 / 2,
    height: 172.66,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
