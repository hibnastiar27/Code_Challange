import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Navbar} from '../../components';
import {listProfile} from '../../../data';
import {colors} from '../../../src/theme';
import {Edit} from 'iconsax-react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderProfile />
        <View>
          <Text style={styles.pLink}>Contact Us</Text>
          <Text style={styles.pLink}>Theme</Text>
          <Text style={styles.pLink}>Privacy & Policy</Text>
          <Text style={styles.pLink}>Term & Condition</Text>
          <Text style={styles.pLink}>Log Out</Text>
        </View>
      </ScrollView>

      {/* <Navbar /> */}
    </View>
  );
}

const HeaderProfile = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.pic}
        source={{
          uri: listProfile.profilePict,
        }}
      />
      <TouchableOpacity style={styles.boxIcon}>
        <Edit size="24" color={colors.black()} />
      </TouchableOpacity>
      <Text style={styles.pBold}>{listProfile.name}</Text>
      <Text style={styles.pNormal}>@{listProfile.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    backgroundColor: colors.green(0.1),
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  pic: {
    width: 150,
    height: 150,
    borderRadius: 250,
    alignSelf: 'center',
  },
  pBold: {
    marginTop: 10,
    textAlign: 'center',
    color: colors.black(),
    fontWeight: 'bold',
    fontSize: 16,
  },
  pNormal: {
    textAlign: 'center',
    color: colors.black(0.5),
    fontWeight: 'normal',
    fontSize: 16,
  },
  pLink: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    color: colors.black(),
    fontWeight: 'bold',
    fontSize: 16,
  },
  boxIcon: {
    position: 'absolute',
    top: 140,
    left: 180,
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.white(),
  },
});
