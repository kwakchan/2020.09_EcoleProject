import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

const CommentsItem = (props) => {
  const { id, name, image, title, createdAt, content, modifiedAt} = props.comment;

  async function putComment(data, id) {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: {
          Authorization: token
        }
      }
      const res = await api.put(`/api/comments/${id}`, data, config);
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

const [modifyContent, setModifyContent] = useState("");

  return (
    <View style={styles.commenter}>
      <ListItem bottomDivider style={styles.commenter}>
        <Avatar rounded source={{ uri: image }} />
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <ListItem.Subtitle>{createdAt}</ListItem.Subtitle>
        </ListItem.Content>

        <View style={styles.udbutton} >
          <Button
            title="수정"
            type="outline"
            onPress={() => {
              const data = {
                boardId: id,
                content: setModifyContent
              }
              putComment(data, id);
            }}
          />
          <Text>   </Text>
          <Button
            onPress={() => { }}
            title="삭제"
            type="outline"
          />
        </View>
      </ListItem>

      {/* 댓글; 제목 + 내용 */}
      <View style={styles.content}>
        <Text style>
          {content}
        </Text>
      </View>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

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
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  commenter: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5
  }
});

export default CommentsItem;