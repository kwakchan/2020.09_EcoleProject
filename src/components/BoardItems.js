import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const BoardItem = (props) => {
  const  navigation  = props.navigation;
  const {board_type, board_title, board_writer, board_timestamp } = props.board;

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                      onPress={() => {navigation.navigate('BoardDetail', { board_type: board_type, board_title: board_title, board_writer: board_writer, board_timestamp: board_timestamp}); 
                      }}
    >
      {/* <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} /> */}
      <View style={{flexDirection: "column", alignItems: "center"}}>
        <Text style={{ fontSize: 15}}>{board_type}</Text>
        <Text style={{ fontSize: 15}}>{board_timestamp}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{board_title}</Text>
      </View>
      <Text style={{ fontSize: 15}}>{board_writer}</Text>
    </TouchableOpacity>
    
  );
};

export default BoardItem;