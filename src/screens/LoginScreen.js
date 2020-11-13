import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../../App';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>이메일로 로그인</Text>
      </View>
      <View style={styles.container}>
        <TextInput 
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          placeholder="  이메일"
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
              signIn();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button title="회원가입" color="#EDD81C"
            onPress={() => navigation.navigate('SignUp')}
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
