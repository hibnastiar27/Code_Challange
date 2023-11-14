import {ScrollView, StyleSheet, View} from 'react-native';

import {Navbar, SearchBar, VerticalList} from '../../components';
import {ListChallange} from '../../../data';
import {colors} from '../../../src/theme';

export default function History() {
  return (
    <View style={styles.container}>
      <SearchBar />

      <ScrollView>
        <ListVertical />
      </ScrollView>

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
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
  },
});
