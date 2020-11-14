import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const CreateNewPwScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>새로운 비밀번호로 변경</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          placeholder="  새로운 비밀번호 입력"
          placeholderTextColor="grey"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="  비밀번호 확인"
          placeholderTextColor="grey"
          secureTextEntry
        />
        <View style={styles.button}>
          <Button title="완료" color="#EDD81C"
            onPress={() => {
              console.log(password);
              navigation.navigate('Login');
            }}
          />
        </View>
        
      </View>
      <View style={{ flex: 8 }}>
      </View>
    </View>
  )
}


export default CreateNewPwScreen;

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
