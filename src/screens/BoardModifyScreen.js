import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';

async function putBoard(data, id, navigation) {
  console.log(data);
  console.log(id);
  try {
      const token = await AsyncStorage.getItem('token');
      const config = {
          headers: {
              Authorization: token
          }
      }
      const res = await api.put(`/api/boards/${id}`, data, config);
      console.log(res);
      navigation.navigate('BoardList');
  } catch (err) {
      console.log(err);
  }
}

const BoardModifyScreen = ({ route, navigation }) => {
  const {id, title, content} = route.params;
  const [boardTitle, setTitle] = useState(title);
  const [boardContent, setContent] = useState(content);



  
  // const [image, setImage] = useState(null);

  // const pickImage = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.All,
  //         allowsEditing: true,
  //         aspect: [4, 3],
  //         quality: 1,
  //     });

  //     console.log(result);

  //     if (!result.cancelled) {
  //         setImage(result.uri);
  //     }
  // };


  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>게시글 수정</Text>
        </View>
        <View style={styles.container}>

          {/* <View>
                        <Text style={styles.info}>팀 로고</Text>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                    </View>
                    <View style={styles.button1}>
                        <Button
                            title="찾아보기"
                            onPress={pickImage}

                        />
                    </View> */}

          <View>
            <TextInput
              onChangeText={setTitle}
              value={boardTitle}
              style={styles.input}
              placeholderTextColor="grey"
            >
              
            </TextInput>
          </View>

          <View>
            <TextInput
              onChangeText={setContent}
              value={boardContent}
              style={styles.inputcontents}
              placeholderTextColor="grey"
              multiline={true}
              maxLength={300}
            > 
            </TextInput>
          </View>
        </View>

        <View style={buttonstyles.button}>
          <Button title="수정 완료"
            onPress={() => {
              const data = {
                title: boardTitle,
                content: boardContent,
                // image: image
              }
              console.log(data)
              putBoard(data, id, navigation);
            }}
          />
        </View>
      </View>
    </ScrollView>

  )

}

export default BoardModifyScreen;

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
  inputcontents: {
    margin: 7,
    width: '95%',
    height: 400,
    alignSelf: 'center',
    borderColor: "grey",
    borderWidth: 0.8,
    textAlignVertical: 'top'
  },
  // image: {
  //     margin: 10,
  //     height: 160,
  //     width: 160,
  //     borderWidth: 0.5,
  //     borderColor: "black"

  // }

})

const buttonstyles = StyleSheet.create({
  button: {
    margin: 30,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
})