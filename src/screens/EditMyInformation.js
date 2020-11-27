import { Picker } from '@react-native-community/picker';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import mime from "mime";


import LocationItem from '../components/LocationItem';
import { api } from '../api';


async function putAccount(id, data, image, navigation) {
  const formData = new FormData();
  formData.append("image", {
    name: `${id}_profile.jpg`,
    type: mime.getType(image.uri),
    uri:
      Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
  });
  formData.append("data", JSON.stringify(data));

  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }
    const res = await api.put(`/api/accounts/${id}`, formData, config);
    navigation.navigate('MyPage', {
      screen: 'EditMyInformation',

    });
  } catch (err) {
    console.log(err.message);
  }
}


const EditMyInformation = ({ route, navigation }) => {
  const { id, weight, height, foot, position, image, district, state } = route.params.params;
  const [_image, setImage] = useState({ uri: image, type: 'image' });
  const [location, setLocation] = useState({ district: district, state: state });
  const [t_position, setPosition] = useState(position);
  const [t_height, setHeight] = useState(height);
  const [t_weight, setWeight] = useState(weight);
  const [t_foot, setFoot] = useState(foot);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    });
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };


  return (
    <ScrollView>
      <View >
        <Text style={styles.title}>내 정보 수정</Text>
      </View>
      <View >
        <Text style={styles.info}>프로필 사진</Text>
        {_image && <Image source={{ uri: _image.uri }} style={{ width: 200, height: 200 }} />}

        <View style={styles.button1}>
          <Button
            title="찾아보기"
            onPress={pickImage}
          />
        </View>

        <Text style={styles.info}>지역</Text>

        <LocationItem setLocation={(location) => setLocation(location)} location={location} />

        <Text style={styles.info}>포지션</Text>
        <Picker
          selectedValue={t_position}
          style={{ height: 50, width: '95%', marginTop: 8 }}
          onValueChange={(itemValue, itemIndex) =>
            setPosition(itemValue)
          }>
          <Picker.Item label="없음" value="없음" />
          <Picker.Item label="st" value="st" />
          <Picker.Item label="cf" value="cf" />
          <Picker.Item label="lw" value="lw" />
          <Picker.Item label="rw" value="rw" />
          <Picker.Item label="cam" value="cam" />
          <Picker.Item label="cdm" value="cdm" />
          <Picker.Item label="cm" value="cm" />
          <Picker.Item label="lb" value="lb" />
          <Picker.Item label="rb" value="rb" />
          <Picker.Item label="cb" value="cb" />
          <Picker.Item label="gk" value="gk" />

        </Picker>

        <Text style={styles.info}>키</Text>
        <TextInput
          onChangeText={setHeight}
          value={t_height}
          style={styles.input}
          placeholderTextColor="grey"
          autoCorrect={false}
        />



        <Text style={styles.info}>몸무게</Text>
        <TextInput
          onChangeText={setWeight}
          value={t_weight}
          style={styles.input}
          placeholderTextColor="grey"
          autoCorrect={false}
        />


        <Text style={styles.info}>주발</Text>
        <Picker
          selectedValue={t_foot}
          style={{ height: 50, width: '95%', marginTop: 8 }}
          onValueChange={(itemValue, itemIndex) =>
            setFoot(itemValue)
          }>
          <Picker.Item label="없음" value="없음" />
          <Picker.Item label="오른발" value="오른발" />
          <Picker.Item label="왼발" value="왼발" />
          <Picker.Item label="양발" value="양발" />


        </Picker>



      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            const data = {
              position: t_position,
              height: t_height,
              weight: t_weight,
              foot: t_foot,
              ...location
            };
            putAccount(id, data, _image, navigation);
          }
          }
          title="저장하기"
        />
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

  button: {
    margin: 30,
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

export default EditMyInformation;