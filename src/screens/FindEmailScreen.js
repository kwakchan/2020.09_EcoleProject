import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import { Picker } from "@react-native-community/picker";
import { api } from '../api';

async function findemail(data, finde) {
  try {
    const res = await api.get("/api/find/email", {params: data});
    console.log("이메일 찾기 성공");
    finde(res.data.email);
  } catch (err) {
    console.log("이메일 찾기 실패");
    console.log(err)
  }
}

const FindEmailScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phonestart, setphonestart] = useState('');
  const [phone, setphone] = useState('');

  const finde = (email) =>
    Alert.alert(
      "이메일 찾기",
      `회원님의 이메일은 \n${email} 입니다`,
      [
        { text: "로그인 화면으로", onPress: () => { console.log("OK Pressed"), navigation.navigate('로그인'); } }
      ],
      { cancelable: false }
    );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
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
          <Picker
            selectedValue={phonestart}
            style={{ height: 70, width: 95 }}
            onValueChange={(itemValue, itemIndex) => {
              setphonestart(itemValue);
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
              const data = {
                name: name,
                phoneNum: `${phonestart}-${phone}`
              }
              findemail(data, finde);
            }}
            title="완료" color="#EDD81C"
          />
        </View>
      </View>
      <View style={{ flex: 10 }}>
      </View>
    </View>


  )
}


export default FindEmailScreen;

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
