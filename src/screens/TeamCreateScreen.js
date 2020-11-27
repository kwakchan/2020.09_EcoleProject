import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native';
import LocationItem from '../components/LocationItem';
import * as ImagePicker from 'expo-image-picker';


const TeamCreateScreen = ({ navigation }) => {

  const [nameteam, setNameTeam] = useState('');
  const [etcteam, setEtcTeam] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>팀 개설</Text>
        </View>
        <View style={styles.container}>

          <View>
            <Text style={styles.info}>팀 로고</Text>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          </View>
          <View style={styles.button1}>
            <Button
              title="찾아보기"
              onPress={pickImage}

            />
          </View>

          <View>
            <Text style={styles.info}>팀 이름</Text>
            <TextInput
              onChangeText={setNameTeam}
              value={nameteam}
              style={styles.input}
              placeholder="  팀이름을 입력하세요 "
              placeholderTextColor="grey"
            />
          </View>

          <View>
            <Text style={styles.info}>지역</Text>

            <LocationItem setLocation={(location) => console.log(location)} />

          </View>

          <View>
            <Text style={styles.info}>팀 소개글</Text>
            <TextInput
              onChangeText={setEtcTeam}
              value={etcteam}
              style={styles.input}
              placeholder="  내용을 입력 해 주세요"
              placeholderTextColor="grey"
            />
          </View>
        </View>
        <View style={buttonstyles.button}>
          <Button title="팀 생성하기"
            onPress={() => {
              const reponse = {
                nameteam: nameteam,
                etcteam: etcteam,
                image: image
              }
              console.log(reponse);
              navigation.navigate('MyPage');
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