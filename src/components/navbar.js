import React from 'react';

import {Home, Activity, UserSquare, AddSquare} from 'iconsax-react-native';
import {StyleSheet, Text, View} from 'react-native';
import {fontType, colors} from '../theme';

const Navbar = () => {
  return (
    <View style={nav.container}>
      <View style={nav.center}>
        <Home size="32" color={colors.green(0.5)} />
        <Text style={nav.text}>Bearanda</Text>
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
        <UserSquare size="32" variant="Bold" color={colors.green()} />
        <Text style={nav.textBold}>Profile</Text>
      </View>
    </View>
  );
};

export default Navbar;

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
