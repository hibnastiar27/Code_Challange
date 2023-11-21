import {Animated, ScrollView, StyleSheet, View} from 'react-native';

import {Navbar, SearchBar, VerticalList} from '../../components';
import {ListChallange} from '../../../data';
import {colors} from '../../../src/theme';

import React, {useRef} from 'react';

export default function History() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 60);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.container2, {transform: [{translateY: recentY}]}]}>
        <SearchBar />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 80}}>
        <ListVertical />
      </Animated.ScrollView>

      {/* <Navbar /> */}
    </View>
  );
}

const ListVertical = () => {
  const Dt = ListChallange.slice(0, ListChallange.length);
  return (
    <View style={styles.header}>
      {Dt.map((item, index) => (
        <VerticalList item={item} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
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
  },
});
