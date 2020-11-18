import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Picker } from "@react-native-community/picker";
import { AuthContext } from '../context';

const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [emailstart, setEmailstart] = useState('');
  const [emailchoice, setEmailchoice] = useState('');
  const [password, setPassword] = useState('');
  const [phonestart, setphonestart] = useState('');
  const [phone, setphone] = useState('');
  const [year, setyear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [gender, setGender] = useState('');

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
            }}>
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

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Picker
            selectedValue={gender}
            style={{ height: 70, width: 96 }}
            onValueChange={(itemValue, itemIndex) => {
              setGender(itemValue);
            }
            }>
            <Picker.Item label="성별" value="" />
            <Picker.Item label="남자" value="남자" />
            <Picker.Item label="여자" value="여자" />
          </Picker>
          <TextInput
            onChangeText={setyear}
            value={year}
            style={{
              margin: 5,
              width: '18%',
              height: 50,
              alignSelf: 'center',
              borderColor: "grey",
              borderWidth: 0.8
            }}
            placeholder="      년도"
            placeholderTextColor="grey"
          />
          <Picker
            selectedValue={month}
            style={{ height: 70, width: 90 }}
            onValueChange={(itemValue, itemIndex) => {
              setMonth(itemValue);
            }
            }>
            <Picker.Item label="월" value="" />
            <Picker.Item label="01월" value="01" />
            <Picker.Item label="02월" value="02" />
            <Picker.Item label="03월" value="03" />
            <Picker.Item label="04월" value="04" />
            <Picker.Item label="05월" value="05" />
            <Picker.Item label="06월" value="06" />
            <Picker.Item label="07월" value="07" />
            <Picker.Item label="08월" value="08" />
            <Picker.Item label="09월" value="09" />
            <Picker.Item label="10월" value="10" />
            <Picker.Item label="11월" value="11" />
            <Picker.Item label="12월" value="12" />
          </Picker>
          <Picker
            selectedValue={day}
            style={{ height: 70, width: 90 }}
            onValueChange={(itemValue, itemIndex) => {
              setDay(itemValue);
            }}>
            <Picker.Item label="일" value="" />
            <Picker.Item label="01일" value="01" />
            <Picker.Item label="02일" value="02" />
            <Picker.Item label="03일" value="03" />
            <Picker.Item label="04일" value="04" />
            <Picker.Item label="05일" value="05" />
            <Picker.Item label="06일" value="06" />
            <Picker.Item label="07일" value="07" />
            <Picker.Item label="08일" value="08" />
            <Picker.Item label="09일" value="09" />
            <Picker.Item label="10일" value="10" />
            <Picker.Item label="11일" value="11" />
            <Picker.Item label="12일" value="12" />
            <Picker.Item label="13일" value="13" />
            <Picker.Item label="14일" value="14" />
            <Picker.Item label="15일" value="15" />
            <Picker.Item label="16일" value="16" />
            <Picker.Item label="17일" value="17" />
            <Picker.Item label="18일" value="18" />
            <Picker.Item label="19일" value="19" />
            <Picker.Item label="20일" value="20" />
            <Picker.Item label="21일" value="21" />
            <Picker.Item label="22일" value="22" />
            <Picker.Item label="23일" value="23" />
            <Picker.Item label="24일" value="24" />
            <Picker.Item label="25일" value="25" />
            <Picker.Item label="26일" value="26" />
            <Picker.Item label="27일" value="27" />
            <Picker.Item label="28일" value="28" />
            <Picker.Item label="29일" value="29" />
            <Picker.Item label="30일" value="30" />
            <Picker.Item label="31일" value="31" />
          </Picker>
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => {
              const data = {
                email: `${emailstart}${emailchoice}`,
                password: password,
                phoneNum: `${phonestart}-${phone}`,
                gender: gender,
                birth: `${year}-${month}-${day}`
              };
              signUp(data);
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
