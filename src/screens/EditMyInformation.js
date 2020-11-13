import { Picker } from '@react-native-community/picker';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import LocationItem from '../components/LocationItem';

const EditMyInformation = ({ navigation }) => {
  const [image, setImage] = useState(null);
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('st');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [foot, setFoot] = useState('');

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
        <Text style={styles.title}>내 정보 수정</Text>

      </View>
      <View >
        <Text style={styles.info}>프로필 사진</Text>
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




        {/* <Text style={styles.info}>닉네임</Text>
                <TextInput
                onChangeText={setName}
                vlaue={name}
                    style={styles.input}
                    placeholder="  김호랑"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                />

                <Text style={styles.info}>생년월일</Text>
                <TextInput
                onChangeText={setBirth}
                vlaue={birth}
                    style={styles.input}
                    placeholder="  1996.08.21"
                    placeholderTextColor="grey"
                /> */}
        <Text style={styles.info}>지역</Text>

        <LocationItem setLocation={(location) => setLocation(location)} />

        <Text style={styles.info}>포지션</Text>
        <Picker
          selectedValue={position}
          style={{ height: 50, width: '95%', marginTop: 8 }}
          onValueChange={(itemValue, itemIndex) =>
            setPosition(itemValue)
          }>
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
          value={height}
          style={styles.input}
          placeholder="  196"
          placeholderTextColor="grey"
        />



        <Text style={styles.info}>몸무게</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          style={styles.input}
          placeholder="  100"
          placeholderTextColor="grey"
        />

        <Text style={styles.info}>주발</Text>
        <Picker
          selectedValue={foot}
          style={{ height: 50, width: '95%', marginTop: 8 }}
          onValueChange={(itemValue, itemIndex) =>
            setFoot(itemValue)
          }>
          <Picker.Item label="오른발" value="right" />
          <Picker.Item label="왼발" value="left" />
          <Picker.Item label="양발" value="both" />


        </Picker>



      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            const response = {
              image: image,
              // name: name,
              position: position,
              //  birth : birth,
              height: height,
              weight: weight,
              foot: foot,
              ...location
            };
            console.log(response);
            navigation.navigate('MyPage');
          }}
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