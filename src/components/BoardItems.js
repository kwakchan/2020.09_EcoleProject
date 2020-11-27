import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const BoardItem = (props) => {
  const  navigation  = props.navigation;
  const {boardtype, id, title, account , createdAt, content } = props.board;
  const author = account.name;

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                      onPress={() => {navigation.navigate('BoardDetail', {title: title, id: id, author: author, createdAt: createdAt, content: content}); 
                      }}
    >
      {/* <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} /> */}
      <View style={{flexDirection: "column", alignItems: "center"}}>
        <Text style={{ fontSize: 15}}>{boardtype}</Text>
        <Text style={{ fontSize: 15}}>{createdAt}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 15}}>{author}</Text>
    </TouchableOpacity>
    
  );
};

export default BoardItem;