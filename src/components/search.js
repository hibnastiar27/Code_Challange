import {SearchNormal1} from 'iconsax-react-native';
import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors} from '../theme';

const SearchBar = () => {
  return (
    <View style={nav.HSearch}>
      <TextInput
        style={nav.input}
        placeholder="Search"
        placeholderTextColor={colors.black(0.2)}
      />
      <View style={nav.boxIcon}>
        <SearchNormal1 style={nav.SearchIcon} variant="Linear" />
      </View>
    </View>
  );
};

export default SearchBar;

const nav = StyleSheet.create({
  HSearch: {
    paddingVertical: 16,
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
