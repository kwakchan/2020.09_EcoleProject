import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Picker } from "@react-native-community/picker";

const FindPwScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [emailstart, setEmailstart] = useState('');
  const [emailchoice, setEmailchoice] = useState('');
  const [phonestart, setphonestart] = useState('');
  const [phone, setphone] = useState('');

  var phoneNum = phonestart + '-' + phone;
  var email = emailstart + emailchoice;

  const [value, setValue] = useState({
    language: 'java',
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>비밀번호 찾기</Text>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <TextInput
          onChangeText={setEmailstart}
          value={emailstart}
          style={{
            margin: 7,
            width: '46%',
            height: 50,
            alignSelf: 'center',
            borderColor: "grey",
            borderWidth: 0.8
          }}
          placeholder="        이메일"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <Picker
          selectedValue={emailchoice}
          style={{ height: 70, width: 180 }}
          onValueChange={(itemValue, itemIndex) => {
            setEmailchoice(itemValue);
            setValue({ language: itemValue });
          }
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
      <View>
        <TextInput
          onChangeText={setName}
          value={name}
          style={styles.input}
          placeholder="      이름"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Picker
            selectedValue={phonestart}
            style={{ height: 70, width: 95 }}
            onValueChange={(itemValue, itemIndex) => {
              setphonestart(itemValue);
              setValue({ language: itemValue });
            }
            }>
            <Picker.Item label="선택" value="" />
            <Picker.Item label="010" value="010" />
            <Picker.Item label="011" value="011" />
            <Picker.Item label="016" value="016" />
            <Picker.Item label="017" value="017" />
            <Picker.Item label="018" value="018" />
            <Picker.Item label="019" value="019" />
          </Picker>
          <TextInput
            onChangeText={setphone}
            value={phone}
            style={{
              margin: 3,
              width: '69%',
              height: 50,
              alignSelf: 'center',
              borderColor: "grey",
              borderWidth: 0.8
            }}
            placeholder="  ex) 0000-0000"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              console.log(email + ' ' + name + ' ' + phoneNum);
              navigation.navigate('CreateNewPw');
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

export default FindPwScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
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
