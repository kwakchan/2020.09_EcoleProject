import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native';
import LocationItem from '../components/LocationItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';

async function postTeam(data, navigation) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': token
      }
    }
    const res = await api.post(`/api/teams`, data, config);
    console.log(res);
    navigation.navigate('MyPage');
  } catch (err) {
    console.log(err);
  }
}

const TeamCreateScreen = ({ navigation }) => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState();

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>팀 개설</Text>
        </View>
        <View style={styles.container}>

          <View>
            <Text style={styles.info}>팀 로고</Text>
            <Image source={{ uri: 'http://34.64.75.54/api/teams/images/team_default.jpg' }} style={{ width: 200, height: 200 }} />
          </View>

          <View>
            <Text style={styles.info}>팀 이름</Text>
            <TextInput
              onChangeText={setName}
              value={name}
              style={styles.input}
              placeholder="  팀이름을 입력하세요 "
              placeholderTextColor="grey"
            />
          </View>

          <View>
            <Text style={styles.info}>지역</Text>
            <LocationItem setLocation={setLocation} />
          </View>

          <View>
            <Text style={styles.info}>팀 소개글</Text>
            <TextInput
              onChangeText={setDescription}
              value={description}
              style={styles.input}
              placeholder="  내용을 입력 해 주세요"
              placeholderTextColor="grey"
              maxLength={200}
            />
          </View>
        </View>
        <View style={buttonstyles.button}>
          <Button title="팀 생성하기"
            onPress={() => {
              const data = {
                name: name,
                description: description,
                ...location
              }
              console.log(data);
              postTeam(data, navigation);
            }}
          />
        </View>
      </View>
    </ScrollView>

  )

}

export default TeamCreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  info: {
    marginTop: 15,
    marginLeft: 8,
    fontSize: 18
  },
  input: {
    margin: 7,
    width: '95%',
    height: 40,
    alignSelf: 'center',
    borderColor: "grey",
    borderWidth: 0.8
  },
  image: {
    margin: 10,
    height: 160,
    width: 160,
    borderWidth: 0.5,
    borderColor: "black"

  }

})

const buttonstyles = StyleSheet.create({
  button: {
    margin: 30,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  button1: {
    marginLeft: 10,
    width: '39%',
    height: 40,
    justifyContent: 'flex-end'
  }
})