import { Picker } from '@react-native-community/picker';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, ScrollView, Button, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import LocationItem from '../components/LocationItem';


const createThreeButtonAlert = (navigation) =>
  Alert.alert(
    "팀 해체",
    "팀을 정말 해체하시겠습니까",
    [
      {
        text: "취소",
        onPress: () => console.log("Cancel Pressed"),


        style: "cancel"
      },
      {
        text: "확인",
        onPress: () => {
          console.log("Team Delete"),
          navigation.navigate('MyPage')
        },
      }
    ],
    { cancelable: false }
  );

const EditTeamInformation = ({ navigation }) => {
  const [value, setValue] = useState({
    language: '선택',
  });
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const [location, setLocation] = useState('')

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

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
      <View >
        <Text style={styles.title}>팀 정보 수정</Text>

      </View>
      <View >
        <Text style={styles.info}>팀 대표 사진</Text>
        {/* <Image
                    source={{
                        uri: 'https://ichef.bbci.co.uk/news/240/cpsprodpb/1675A/production/_113249919_hi061718491.jpg',
                    }}
                    style={styles.image}
                /> */}
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        <View style={styles.button1}>
          <Button
            title="찾아보기"
            onPress={pickImage}

          />
        </View>




        <Text style={styles.info}>팀 이름</Text>

        <TextInput
          onChangeText={setName}
          value={name}
          style={styles.input}
          placeholder="  고양이팀"
          placeholderTextColor="grey"
          autoCapitalize="none"


        />

        <Text style={styles.info}>지역</Text>

        <LocationItem setLocation={(location) => setLocation(location)} />



        <Text style={styles.info}>팀 설명</Text>


        <TextInput
          onChangeText={setNote}
          value={note}
          style={styles.inputlong}
          multiline={true}
          placeholder="  열심히 해봅시다"
          placeholderTextColor="grey"
          autoCapitalize="none"


        />



      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            const response = {

              name: name,
              image: image,
              note: note,
              ...location

            };
            console.log(response);
            navigation.navigate('MyPage');
          }}
          title="저장하기"
        />
        <Text></Text>
        <Button title={"팀 해체"} onPress={() => createThreeButtonAlert(navigation)} />

      </View>


    </ScrollView>
  )

}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
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

  inputlong: {
    margin: 7,
    width: '95%',
    height: 120,
    alignSelf: 'center',
    borderColor: "grey",
    borderWidth: 0.8,
    textAlignVertical: 'top'

  },

  button: {
    margin: 50,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },

  image: {
    margin: 10,
    height: 160,
    width: 160,
    borderWidth: 0.5,
    borderColor: "black"

  },

  button1: {
    marginLeft: 10,
    width: '39%',
    height: 40,
    justifyContent: 'flex-end'
  },


});

export default EditTeamInformation;