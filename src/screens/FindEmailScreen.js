import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import { Picker } from "@react-native-community/picker";

const FindEmailScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phonestart, setphonestart] = useState('');
  const [phone, setphone] = useState('');
  var phoneNum = phonestart + '-' + phone;
  const [value, setValue] = useState({
    language: 'java',
  });


  const find = () =>
    Alert.alert(
      "이메일 찾기",
      "회원님의 이메일은 ",
      [
        { text: "확인", onPress: () => { console.log("OK Pressed"), navigation.navigate('Login'); } }
      ],
      { cancelable: false }
    );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>이메일 찾기</Text>
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
              find();
              console.log(name + ' ' + phoneNum);
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
