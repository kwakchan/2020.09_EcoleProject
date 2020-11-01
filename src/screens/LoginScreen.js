import React from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';

const LoginScreen = ({ navigation }) => {

    return (
      <View style={{ flex: 1, padding: 20}}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, textAlign: 'center'}}>이메일로 로그인</Text>
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="  이메일"
          placeholderTextColor="grey" 
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="  비밀번호"
          placeholderTextColor="grey"
        />
        <View style = {buttonstyles.button}>
            <Button title="로그인"
                onPress={() => navigation.navigate('LoginScreen') }
            />
        </View>
        <View style = {buttonstyles.button}>
            <Button title="회원가입"
                onPress={() => navigation.navigate('SignUpScreen') }
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
    }
})
const buttonstyles = StyleSheet.create({
    button: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 1,
    marginTop: 15
    }
})