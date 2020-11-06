import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

//console에 내용찍히게
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>회원가입</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          onChangeText={setName}
          vlaue={name}
          style={styles.input}
          placeholder="  이름"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={setEmail}
          vlaue={email}
          style={styles.input}
          placeholder="  이메일"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={setPassword}
          vlaue={password}
          style={styles.input}
          placeholder="  비밀번호"
          placeholderTextColor="grey"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="  비밀번호 확인"
          placeholderTextColor="grey"
          secureTextEntry
        />
        <TextInput
          onChangeText={setBirth}
          vlaue={birth}
          style={styles.input}
          placeholder="  생년월일"
          placeholderTextColor="grey"
        />
        <TextInput
          onChangeText={setGender}
          vlaue={gender}
          style={styles.input}
          placeholder="  성별"
          placeholderTextColor="grey"
        />
        <View style={styles.button}>
          <Button
            onPress={() => {
              const response = {
                name: name,
                email: email,
                password: password,
                birth: birth,
                gender: gender
              };
              console.log(response);
              navigation.navigate('Login');
            }}
            title="완료" color="#EDD81C"
          />
        </View>
      </View>
      <View style={{ flex: 8 }}>
      </View>
    </View>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  input: {
    margin: 7,
    width: '95%',
    height: 50,
    alignSelf: 'center',
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
