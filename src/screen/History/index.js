import {ScrollView, StyleSheet, View} from 'react-native';

import {Navbar, SearchBar, VerticalList} from '../../components';
import {listChallange} from '../../../data';
import {colors} from '../../../src/theme';

export default function History() {
  return (
    <View style={styles.container}>
      <SearchBar />

      <ScrollView>
        <ListVertical />
      </ScrollView>

      <Navbar />
    </View>
  );
}

const ListVertical = () => {
  const Dt = listChallange.slice(0, listChallange.length);
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
