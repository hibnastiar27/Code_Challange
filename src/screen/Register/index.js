import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {colors, fontType} from '../../theme';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignupDisabled, setSignupDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [paddingVertical, setPaddingVertical] = useState(60);
  const navigation = useNavigation();

  const handleRegister = async () => {
    let errorMessage = '';

    if (password.length < 8) {
      errorMessage = 'Panjang kata sandi harus minimal 8 karakter.';
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
      if (!passwordRegex.test(password)) {
        errorMessage = 'Password harus mengandung kombinasi huruf dan angka.';
      }
    }

    if (errorMessage) {
      Alert.alert('Error', errorMessage);
      return;
    }

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({
          fullName,
          username,
          email,
          photoUrl: `https://avatars.githubusercontent.com/u/96623047?v=4`,
          createdAt: new Date(),
        })
        .then(() => {
          console.log('User added!');
        });
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      console.log('Registration Error:', error);
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email sudah terdaftar!';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email tidak valid';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password lemah';
      }
      Alert.alert('Error', errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const updateSignupButtonStatus = () => {
    if (fullName.trim() && email.trim() && password.trim() && username.trim()) {
      setSignupDisabled(false);
    } else {
      setSignupDisabled(true);
    }
  };

  useEffect(() => {
    updateSignupButtonStatus();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setPaddingVertical(0);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setPaddingVertical(70);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [fullName, email, password, username]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, {paddingVertical}]}>
        <Text style={styles.header}>Sign up</Text>
        <Text style={styles.caption}>
          Gada kata terlambat untuk gabung di CodeChallange Sekarang!
        </Text>
        <ScrollView>
          <View style={styles.form}>
            <View>
              <Text style={textinput.label}>Nama Lengkap</Text>
              <View style={textinput.container}>
                <TextInput
                  placeholder="Masukan Nama Lengkap"
                  placeholderTextColor={colors.white(0.6)}
                  value={fullName}
                  onChangeText={text => {
                    setFullName(text);
                    updateSignupButtonStatus();
                  }}
                  style={textinput.text}
                />
              </View>
            </View>
            <View>
              <Text style={textinput.label}>Username</Text>
              <View style={textinput.container}>
                <TextInput
                  placeholder="Masukan Username"
                  placeholderTextColor={colors.white(0.6)}
                  value={username}
                  onChangeText={text => {
                    setUsername(text);
                    updateSignupButtonStatus();
                  }}
                  style={textinput.text}
                />
              </View>
            </View>
            <View>
              <Text style={textinput.label}>Email</Text>
              <View style={textinput.container}>
                <TextInput
                  placeholder="Masukan Alamat Email Kamu"
                  placeholderTextColor={colors.white(0.6)}
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    updateSignupButtonStatus();
                  }}
                  inputMode="email"
                  keyboardType="email-address"
                  style={textinput.text}
                />
              </View>
            </View>
            <View>
              <Text style={textinput.label}>Password</Text>
              <View
                style={[
                  textinput.container,
                  {
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 10,
                  },
                ]}>
                <TextInput
                  placeholder="Masukan Passowrd"
                  placeholderTextColor={colors.white(0.6)}
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                    updateSignupButtonStatus();
                  }}
                  secureTextEntry={!passwordVisible}
                  style={[textinput.text, {flex: 1}]}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <EyeSlash
                      variant="Linear"
                      color={colors.white(0.6)}
                      size={20}
                    />
                  ) : (
                    <Eye variant="Linear" color={colors.white(0.6)} size={20} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{gap: 10}}>
          <TouchableHighlight
            style={[
              button.container,
              {
                backgroundColor: isSignupDisabled
                  ? colors.green(0.2)
                  : colors.green(),
              },
            ]}
            underlayColor={colors.green(0.2)}
            onPress={handleRegister}
            disabled={isSignupDisabled}>
            {loading ? (
              <ActivityIndicator color={colors.white()} />
            ) : (
              <Text style={button.label}>Daftar</Text>
            )}
          </TouchableHighlight>
          <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
            <Text style={[button.label, {color: colors.white()}]}>
              Dah punya akun?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[button.label, {color: colors.green()}]}>
                Masuk Disini Cuy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black(0.9),
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: colors.white(),
  },
  caption: {
    textAlign: 'center',
    color: colors.white(0.6),
    fontSize: 14,
    marginTop: 5,
    marginBottom: 40,
  },
  form: {
    gap: 20,
    marginBottom: 20,
  },
});
const textinput = StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.white(),
    marginBottom: 5,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: colors.white(0.05),
    height: 52,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    paddingVertical: 0,
    color: colors.white(0.6),
  },
});
const button = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  label: {
    color: colors.black(),
    fontSize: 14,
  },
});
