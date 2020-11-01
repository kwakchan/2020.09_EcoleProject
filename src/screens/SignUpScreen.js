import React from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';

const SignUpScreen = ({ navigation }) => {

    return (
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, textAlign: 'center'}}>회원가입</Text>
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="  이름"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="  이메일"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="  별명"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="  비밀번호"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="  비밀번호 확인"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="  생년월일"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="  성별"
          placeholderTextColor="grey"
        />
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
    }
})
const buttonstyles = StyleSheet.create({
    button: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 1,
    marginTop: 10
    }
})