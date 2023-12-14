import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import React, {useEffect, useState, useRef} from 'react';
import {colors} from '../../../src/theme';
import {Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';

export default function Profile() {
  const navigation = useNavigation();
  const actionSheetRef = useRef(null);

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderProfile />
        <View>
          <View style={styles.flex}>
            <Text style={styles.pLink}>Contact Us</Text>
            <Text style={styles.pLink}>Theme</Text>
            <Text style={styles.pLink}>Privacy & Policy</Text>
            <Text style={styles.pLink}>Term & Condition</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const HeaderProfile = () => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);

          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              console.log(userData);
              setProfileData(userData);
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });

          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);
  return (
    <View style={styles.header}>
      <FastImage
        style={styles.pic}
        source={{
          uri: profileData?.photoUrl,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <TouchableOpacity style={styles.boxIcon}>
        <Edit size="24" color={colors.black()} />
      </TouchableOpacity>
      <Text style={styles.pBold}>{profileData?.fullName}</Text>
      <Text style={styles.pNormal}>@{profileData?.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  logout: {
    borderRadius: 16,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: colors.red(0.5),
    color: colors.white(),
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
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
