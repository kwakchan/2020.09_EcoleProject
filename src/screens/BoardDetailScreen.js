import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import CommentsItem from '../components/CommentsItem'
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getBoardDetail(setBoards, id) {
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get(`/api/boards/${id}`, config);
    setBoards(res.data);
  } catch (error) {
    console.log(error)
  }
}

const BoardDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [boards, setBoards] = useState('');

  useEffect(() => {
    getBoardDetail(setBoards, id);
  }, [])

  const deleteButtonAlert = () =>
    Alert.alert(
      "게시물 삭제",
      "작성하신 글을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "확인", onPress: () => navigation.navigate('BoardList')
        }
      ],
      { cancelable: false }
    );

  return (
    <>
      <View style={{ flex: 1, padding: 1 }}>
        {/* 게시글; 프로필사진 avatar + 이름 title + 시간 subtitle */}
        <View style={styles.writer} >
          <ListItem bottomDivider>
            <Avatar rounded source={{ uri: 'http://placeimg.com/50/50' }} />
            <ListItem.Content>
              <ListItem.Title>{boards.name}</ListItem.Title>
              <ListItem.Subtitle>{boards.createdAt}</ListItem.Subtitle>
            </ListItem.Content>

            <View style={styles.udbutton} >
              <Button
                title="수정"
                type="outline"
              />
              <Text>   </Text>
              <Button
                onPress={deleteButtonAlert}
                title="삭제"
                type="outline"
              />
            </View>
          </ListItem>
        </View>

        {/* 게시글; 제목 + 내용 */}
        <View style={styles.content}>
          <Text style={styles.title}>
            {boards.title}
          </Text>
          <Text>
            {boards.content}
          </Text>
        </View>

        {/* 프로필사진 avatar + 이름 title + 시간 subtitle */}
        <View style={{ flex:1, margin: 10 }}>
          <FlatList
            data={boards.comments}
            keyExtractor={(item) => item.id.toString()} // comment의 id 값 주긴
            renderItem={({ item }) => <CommentsItem comment={item} navigation={navigation} />}
            style={{ backgroundColor: 'white' }}
          />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  udbutton: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  writer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  commenter: {
    backgroundColor: 'white',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  }
});

export default BoardDetailScreen;