import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {
  TopParticipant,
  Navbar,
  SearchBar,
  VerticalList,
} from '../../components';
import {ListChallange, levelList} from '../../../data';
import {fontType, colors} from '../../../src/theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function Beranda() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.container2, {transform: [{translateY: recentY}]}]}>
        <View style={styles.header}>
          <Text style={styles.title}>CODE CHALLANGE.</Text>
        </View>
        <SearchBar />
        <View style={category.listCategory}>
          <LevelCategory />
        </View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 142}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.h1}>Most Participant</Text>
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator
              style={styles.loading}
              size={'large'}
              color={colors.green()}
            />
          ) : (
            blogData.map((item, index) => (
              <TopParticipant data={item} key={index} />
            ))
          )}
          {console.log(blogData)}
        </View>
        <ListVertical />
      </Animated.ScrollView>
    </View>
  );
}

const ListVertical = () => {
  const Dt = ListChallange.slice(1, ListChallange.length);
  return (
    <View style={styles.header}>
      {Dt.map((item, index) => (
        <VerticalList item={item} key={index} />
      ))}
    </View>
  );
};

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
  return <TopParticipant data={ListChallange[0]} />;
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 20,
  },
  container2: {
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 1,
    left: 0,
    right: 0,
    elevation: 1000,
  },
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
