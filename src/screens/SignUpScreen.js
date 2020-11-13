import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Picker } from "@react-native-community/picker";

//console에 내용찍히게
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailchoice, setEmailchoice] = useState('');
  const [password, setPassword] = useState('');
  const [year, setyear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [gender, setGender] = useState('');
  const [value, setValue] = useState({
    language: 'java',
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>회원가입</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          onChangeText={setName}
          value={name}
          style={styles.input}
          placeholder="      이름"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={{margin: 7,
            width: '25%',
            height: 50,
            alignSelf: 'center',
            borderColor: "grey",
            borderWidth: 0.8}}
          placeholder="        이메일"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <Picker
            selectedValue={emailchoice}
            style={{ height: 70, width: 160 }}
            onValueChange={(itemValue, itemIndex) =>
              {setEmailchoice(itemValue);
              setValue({ language: itemValue });}
            }>
            <Picker.Item label="선택" value="" />
            <Picker.Item label="@naver.com" value="@naver.com" />
            <Picker.Item label="@daum.net" value="@daum.net" />
            <Picker.Item label="@gmail.com" value="@gmail.com" />
            <Picker.Item label="@nate.com" value="@nate.com" />
            <Picker.Item label="@yahoo.co.kr" value="@yahoo.co.kr" />
            <Picker.Item label="@unitel.co.kr" value="@unitel.co.kr" />
            <Picker.Item label="@hitel.com" value="@hitel.com" />
            <Picker.Item label="@dreamwiz.com" value="@dreamwiz.com" />
            <Picker.Item label="@lycos.co.kr" value="@lycos.co.kr" />
            <Picker.Item label="@netian.com" value="@netian.com" />
            <Picker.Item label="@empal.com" value="@empal.com" />
            <Picker.Item label="@paran.com" value="@paran.com" />
          </Picker>
        </View>
        <TextInput
          onChangeText={setPassword}
          value={password}
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

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          
          <TextInput
            onChangeText={setyear}
            value={year}
            style={{margin: 7,
              width: '25%',
              height: 50,
              alignSelf: 'center',
              borderColor: "grey",
              borderWidth: 0.8}}
            placeholder="          년도"
            placeholderTextColor="grey"
          />
          <Picker
            selectedValue={month}
            style={{ height: 70, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              {setMonth(itemValue);
              setValue({ language: itemValue });}
            }>
            <Picker.Item label="월" value="" />
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
          <Picker
            selectedValue={day}
            style={{ height: 70, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              {setDay(itemValue);
              setValue({ language: itemValue });}
            }>
            <Picker.Item label="일" value="" />
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
          </Picker>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Picker
            selectedValue={gender}
            style={{ height: 70, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              {setGender(itemValue);
              setValue({ language: itemValue });}
            }>
            <Picker.Item label="성별" value="" />
            <Picker.Item label="남" value="남" />
            <Picker.Item label="여" value="여" />
          </Picker>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              const response = {
                name: name,
                email: email,
                password: password
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
