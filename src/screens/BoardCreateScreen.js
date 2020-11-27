import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';

async function postBoard(data, navigation) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': token
      }
    }
    const res = await api.post('/api/boards', data, config);
    console.log(res);
    navigation.navigate('BoardList');
  } catch (err) {
    console.log(err);
  }
}

const BoardCreateScreen = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [boardType, setBoardType] = useState('FREE');


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
          <Text style={{ fontSize: 30, textAlign: "center" }}>게시글 개설</Text>
        </View>
        <View style={styles.container}>
          <Picker
            style={[styles.picker]} //스타일 지정
            selectedValue={boardType} //제일 위 선택란에 누른 아이템이 표시된다
            onValueChange={(itemValue, itemIndex) => {
              setBoardType(itemValue)
              console.log(itemValue);
            }}                        //value가 바뀌면 상태를 변경해준다 
          >
            <Picker.Item label="자유 게시판" value="FREE" />
            <Picker.Item label="용병 신청" value="INVITE" />
            <Picker.Item label="용병 찾기" value="FIND" />
          </Picker>



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
              value={title}
              style={styles.input}
              placeholder="  제목을 입력하세요 "
              placeholderTextColor="grey"
            />
          </View>

          <View>
            <TextInput
              onChangeText={setContent}
              value={content}
              style={styles.inputcontents}
              placeholder="  내용을 입력 해 주세요"
              placeholderTextColor="grey"
              multiline={true}
              maxLength={300}
            />
          </View>
        </View>

        <View style={buttonstyles.button}>
          <Button title="게시글 올리기"
            onPress={() => {
              const data = {
                title: title,
                content: content,
                // image: image
                boardType: boardType
              }
              postBoard(data, navigation);
            }}
          />
        </View>
      </View>
    </ScrollView>

  )

}

export default BoardCreateScreen;

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