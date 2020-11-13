import React from "react";
import { Text, Image, View, StyleSheet, Button, Alert} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";

const user = [
    {
      name: '김민수',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38'
    }
  ]

const comment = [
    {
      name: '강동원',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38',
      text: '선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다'
    },
    {
      name: '강동원',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38',
      text: '선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다'
    },
    {
      name: '강동원',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38',
      text: '선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다'
    }
  ]

const BoardDetailScreen = ({navigation}) => {

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
        { text: "확인", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <ScrollView style={styles.background}>

      {/* 프로필사진 avatar + 이름 title + 시간 subtitle */}
      <View style={styles.writer} >
        {
            user.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar rounded source={{ uri: l.avatar_url }} />
                <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.time}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            ))
        }
      </View>

      {/* 수정/삭제 버튼 _ permission:작성자 */}
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

      {/* 제목 + 내용 */}
      <View style={styles.content}>
        <Text style={styles.title}>
          제목입니다 글자수 제한은 없습니다
        </Text>
        <Text>
          내용입니다
        </Text>
      </View>

      {/* 프로필사진 avatar + 이름 title + 시간 subtitle */}
      <View>
        {
            comment.map((l, i) => (
              <View key={i} style={styles.commenter}>
                <ListItem  bottomDivider>
                  <Avatar rounded source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Subtitle>{l.time}</ListItem.Subtitle>
                </ListItem>
                <Text style={{margin:10}}>{l.text}</Text>
              </View>
            ))
        }
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  udbutton: {
    flexDirection:'row',
    position:'absolute',
    top:30,
    right:30
  },
  writer: {
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  content: {
    backgroundColor:'white',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    padding:20
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },
  commenter: {
    backgroundColor:'white',
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    marginBottom:5
  }
});

export default BoardDetailScreen;