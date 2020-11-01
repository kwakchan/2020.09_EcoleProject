import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MatchingItem from '../components/MatchingItem';

const matchings = [
    {
      id: 1,
      team_name: 'A',
      matching_location: 'BUSAN',
      matching_time:'19:00',
      matching_count:'11',
    },
    {
      id: 2,
      team_name: 'B',
      matching_location: 'BUSAN',
      matching_time:'20:00',
      matching_count:'11',
    },
    {
      id: 3,
      team_name: 'c',
      matching_location: 'BUSAN',
      matching_time:'21:00',
      matching_count:'11',
    },
  ];


const MatchListScreen = ({ navigation }) => {
    
    return (
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 30 }}>경기 대기 목록</Text>
        <Text style={{ fontSize: 10 }}>내가 개설한 경기 목록</Text>
        <Text style={{ fontSize: 10 }}>전체 경기 목록</Text>        
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        
        <Button
          style={{weight:10 }}
          title="전송"
        />

         <FlatList
          data={matchings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MatchingItem matching={item} />}        
        />
        
        <Button
          title="경기개설"
        />
      </View>
    )
  }
  
  export default MatchListScreen;