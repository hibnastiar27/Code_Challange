import {SearchNormal1} from 'iconsax-react-native';
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchPage')}>
      <View style={nav.HSearch}>
        <View style={nav.bar}>
          <Text style={nav.placeholder}>Search</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;

const nav = StyleSheet.create({
  HSearch: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  bar: {
    borderColor: colors.grey(0.9),
    borderWidth: 1,
    padding: 10,
    borderRadius: 90,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    color: colors.grey(0.5),
    lineHeight: 18,
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
