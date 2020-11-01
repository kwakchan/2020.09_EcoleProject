import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useForm } from "react-hook-form";

import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import MatchingItem from '../components/MatchingItem';
import {useIsFocused} from '@react-navigation/native';

const matchings = [
    {
      team_name: 'A',
      matching_location: 'BUSAN',
      matching_time:'19:00',
      matching_count:'11',
    },
    {
      team_name: 'B',
      matching_location: 'BUSAN',
      matching_time:'20:00',
      matching_count:'11',
    },
    {
      team_name: 'c',
      matching_location: 'BUSAN',
      matching_time:'21:00',
      matching_count:'11',
    },
  ];


/*
// matching 테이블 불러오기
async function fetchMatching(setMatching) {
    try {
      const response = await axios.get("http://34.64.75.54/api/matching");
      setMatching(response.data);
    } catch(e) {
      console.error(e);
    }  
}
*/  


// 경기 대기 목록 페이지
const MatchingWaitingList = ({ navigation }) => {
/*    const [matching, setMatching] = useState([]);
    const isFocused = useIsFocused();
  
    useEffect(() => {
        fetchMatching(setMatching)
    },[isFocused])
*/ 
    const [value, onChangeText] = React.useState('Useless Placeholder');
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
      <View style={{ padding: 30 }}>
        
        <Text style={{ fontSize: 30 }}>경기 대기 목록</Text>
        
        <Text style={{ fontSize: 10 }}>내가 개설한 경기 목록</Text>
        

        
        <Text style={{ fontSize: 10 }}>전체 경기 목록</Text>        
        
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register} />
        <select name="gender" ref={register}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
        </select>
        <input type="submit" />
        </form>
        </>
        
        <Button
          style={{weight:10 }}
          title="전송"
          onPress={() => navigation.navigate('#') }
        />

        {/* matching 테이블 불러오기 
         <FlatList
          data={matchings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MatchingItem matching={item} />}        
        /> */}
        
        <Button
          title="경기개설1"
          onPress={() => navigation.navigate('#') }
        />
      </View>
    )
  }
  
  export default MatchingWaitingList;