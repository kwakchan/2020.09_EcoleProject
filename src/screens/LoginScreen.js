import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../context';



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <View style={styles.container}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          placeholder="     이메일"
          placeholderTextColor="grey"
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          placeholder="  비밀번호"
          placeholderTextColor="grey"
          secureTextEntry
        />
        <View style={styles.button}>
          <Button title="로그인" color="#EDD81C"
            onPress={() => {
              const data = {
                email: email,
                password: password
              }
              signIn(data);
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{
            width: '50%',
            alignSelf: 'center',
            marginVertical: 1,
            marginTop: 15,
          }}>
            <Button title="이메일 찾기" color="#EDD81C"
              onPress={() => navigation.navigate('이메일 찾기')}
            />
          </View>
          <View style={{
            width: '50%',
            alignSelf: 'center',
            marginVertical: 1,
            marginTop: 15,
          }}>
            <Button title="비밀번호 찾기" color="#EDD81C"
              onPress={() => navigation.navigate('비밀번호 찾기')}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button title="회원가입" color="#EDD81C"
            onPress={() => navigation.navigate('회원가입')}
          />
        </View>
      </View>
      <View style={{ flex: 8 }}>
      </View>
    </View>
  )
}


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  input: {
    margin: 7,
    height: 50,
    borderColor: "grey",
    borderWidth: 0.8
  },
  button: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 1,
    marginTop: 15,
  }
})
