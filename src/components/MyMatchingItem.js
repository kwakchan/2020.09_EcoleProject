import React from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';

const MyMatchingItem = (props) => {
  const {matching_location, matching_time, matching_count } = props.myMatching;

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                            // onPress={() => navigation.navigate('#') }
    >
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_time}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_location}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_count}</Text>
        
        <Button title="수정하기"  onPress={() => navigation.navigate('#') }/>
        <Button title="요청목록"  onPress={() => navigation.navigate('#') }/>
    </TouchableOpacity>
  );
};

export default MyMatchingItem;