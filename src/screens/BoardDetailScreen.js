import React from "react";
import { Text, Image, View, StyleSheet, Button, Alert} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";

const comment = [
    {
      name: '강동원',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38',
      text: '선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다'
    },
    {
      name: '강동원',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38',
      text: '선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다'
    },
    {
      name: '강동원',
      avatar_url: 'http://placeimg.com/50/50',
      time: '2020/11/15 14:38',
      text: '선한 댓글은 모두에게 행복을 줍니다 선한 댓글은 모두에게 행복을 줍니다'
    }
  ]

const BoardDetailScreen = ({route, navigation}) => {
  const {title, author, createdAt, content} = route.params;
  const user = [
    {
      name: JSON.stringify(author),
      avatar_url: 'http://placeimg.com/50/50',
      time: JSON.stringify(createdAt)
    }
  ]
  
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
        { text: "확인", onPress:() => navigation.navigate('BoardList')
      }
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

                {/* 수정/삭제 버튼 _ permission:글쓴이 */}
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
            ))
        }
      </View>

      {/* 제목 + 내용 */}
      <View style={styles.content}>
        <Text style={styles.title}>
          {JSON.stringify(title)}
        </Text>
        <Text>
          {JSON.stringify(content)}  
        </Text>
      </View>

      {/* 프로필사진 avatar + 이름 title + 시간 subtitle */}
      <View style={{margin:10}}>
        {
            comment.map((l, i) => (
              <View key={i} style={styles.commenter}>
                <ListItem  bottomDivider>
                  <Avatar rounded source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.time}</ListItem.Subtitle>
                  </ListItem.Content>
                  
                  {/* 수정/삭제 버튼 _ permission:댓쓴이 */}
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
    alignItems:'baseline'
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