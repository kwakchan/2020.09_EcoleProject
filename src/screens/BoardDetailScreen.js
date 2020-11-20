import React, {Component} from "react";
import { Text, Image, View, StyleSheet, Button, Alert,
  TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView} from "react-native-gesture-handler";


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

const BoardDetailScreen = ({navigation}) => {

  const [value, setValue] = React.useState('');

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
                    color="gray"
                    type="outline"
                  />
                  <Text>   </Text>
                  <Button
                    onPress={deleteButtonAlert}
                    title="삭제"
                    color="#de3143"
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
          제목입니다 글자수 제한은 없습니다
        </Text>
        <Text>
          내용입니다
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
        </Text>
      </View>

      {/* 댓글 입력창 */}
      <View style={styles.inputComment}>
        <TextInput
          style={styles.inputCommentTextbox}
          multiline ={true}          
          placeholderTextColor="grey"
          placeholder="댓글을 입력하세요."
        />
        <Button title="완료" color="gray" >
        </Button>
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
                      onPress={deleteButtonAlert}
                      title="삭제"
                      color="#de3143"
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
  },





  inputComment: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 25
  },
  inputCommentTextbox: {
    marginRight:20,
    width:"83%"
  }











});

export default BoardDetailScreen;