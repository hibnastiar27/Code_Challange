import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, fontType} from '../../theme';
import {Eye, EyeSlash} from 'iconsax-react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoginDisabled, setLoginDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    let errorMessage = '';
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const userToken = await auth().currentUser.getIdToken();
      const expirationInMilliseconds = 30 * 24 * 60 * 60 * 1000; //hari * jam * menit * detik * milidetik
      const expirationTime = new Date().getTime() + expirationInMilliseconds;
      const dataToStore = {
        userToken,
        expirationTime,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(dataToStore));
      setLoading(false);
      navigation.navigate('MainApp');
    } catch (error) {
      setLoading(false);
      console.log('Login Error:', error.message);
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email tidak valid.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Password salah.';
      } else if (error.code === 'auth/invalid-login') {
        errorMessage = 'Email atau password salah, silahkan periksa kembali.';
      } else {
        errorMessage = 'Terjadi kesalahan saat login.';
      }
      Alert.alert('Error', errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const updateLoginButtonStatus = () => {
    if (email.trim() && password.trim()) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };
  useEffect(() => {
    updateLoginButtonStatus();
  }, [email, password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container]}>
        <Text style={styles.header1}>CODE CHALLANGE</Text>
        <View style={styles.box}>
          <View>
            <Text style={styles.header}>Log in</Text>
            <Text style={styles.caption}>Gasken Login di CodeChallange</Text>
            <View style={styles.form}>
              <View>
                <Text style={textinput.label}>Email</Text>
                <View style={textinput.container}>
                  <TextInput
                    placeholder="Ketik Email Kamu"
                    placeholderTextColor={colors.white(0.6)}
                    value={email}
                    onChangeText={text => {
                      setEmail(text);
                      updateLoginButtonStatus();
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
                    placeholder="Ketik Password Kamu"
                    placeholderTextColor={colors.white(0.6)}
                    value={password}
                    onChangeText={text => {
                      setPassword(text);
                      updateLoginButtonStatus();
                    }}
                    secureTextEntry={!passwordVisible}
                    style={[textinput.text, {flex: 1}]}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    {passwordVisible ? (
                      <Eye
                        variant="Linear"
                        color={colors.white(0.6)}
                        size={20}
                      />
                    ) : (
                      <EyeSlash
                        variant="Linear"
                        color={colors.white(0.6)}
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{gap: 10}}>
            <TouchableHighlight
              style={[
                button.container,
                {
                  backgroundColor: isLoginDisabled
                    ? colors.green(0.2)
                    : colors.green(),
                },
              ]}
              underlayColor={colors.green(0.2)}
              onPress={handleLogin}
              disabled={isLoginDisabled}>
              {loading ? (
                <ActivityIndicator color={colors.white()} />
              ) : (
                <Text style={button.label}>MASUK</Text>
              )}
            </TouchableHighlight>
            <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
              <Text style={[button.label, {color: colors.white()}]}>
                Gapunya akun?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={[button.label, {color: colors.green()}]}>
                  Klik Daftar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    backgroundColor: colors.green(0.2),
    justifyContent: 'space-between',
    height: '100%',
  },
  box: {
    zIndex: 99,
    height: '70%',
    backgroundColor: colors.black(0.9),
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 60,
    gap: 20,
  },
  header: {
    fontSize: 32,
    color: colors.white(),
  },
  header1: {
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.black(0.9),
  },
  caption: {
    color: colors.white(0.6),
    fontSize: 14,
    marginTop: 5,
    marginBottom: 40,
  },
  form: {
    gap: 20,
  },
});
const textinput = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white(),
    marginBottom: 5,
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
