import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  SearchNormal1,
  Home,
  Activity,
  UserSquare,
  AddSquare,
} from 'iconsax-react-native';

import {TopParticipant} from './src/components';

import {listChallange, levelList} from './data';

import {fontType, colors} from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CODE CHALLANGE.</Text>
      </View>

      <View style={styles.HSearch}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={colors.black(0.2)}
        />
        <View style={styles.boxIcon}>
          <SearchNormal1 style={styles.SearchIcon} variant="Linear" />
        </View>
      </View>

      <View style={category.listCategory}>
        <LevelCategory />
      </View>

      <ScrollView>
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
  return listChallange.map(item => (
    <TopParticipant key={item.id} data={item} />
  ));
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

const Navbar = () => {
  return (
    <View style={nav.container}>
      <View style={nav.center}>
        <Home size="32" variant="Bold" color={colors.green()} />
        <Text style={nav.textBold}>Bearanda</Text>
      </View>

      <View style={nav.center}>
        <Activity size="32" color={colors.green(0.5)} />
        <Text style={nav.text}>History</Text>
      </View>

      <View style={nav.center}>
        <AddSquare size="32" color={colors.green(0.5)} />
        <Text style={nav.text}>Add</Text>
      </View>

      <View style={nav.center}>
        <UserSquare size="32" color={colors.green(0.5)} />
        <Text style={nav.text}>Profile</Text>
      </View>
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
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#58FF9B',
    textAlign: 'center',
  },
  HSearch: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    marginLeft: 24,
    marginVertical: 0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: colors.black(0.2),
    padding: 10,
    color: colors.black(),
    borderRadius: 50,
    width: '70%',
  },
  boxIcon: {
    backgroundColor: '#ABFFCD',
    borderRadius: 50,
    padding: 10,
  },
  SearchIcon: {
    size: 24,
    color: '#1e1e1e',
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

const nav = StyleSheet.create({
  container: {
    bottom: 0,
    padding: 20,
    borderRadius: 0,
    flexDirection: 'row',
    backgroundColor: colors.white(),
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.green(0.5),
  },
  center: {
    alignItems: 'center',
  },
  text: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.black(0.5),
  },
  textBold: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black(),
  },
});
