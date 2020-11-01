import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import MemberItem from '../components/MemberItem';
import {useIsFocused} from '@react-navigation/native';

async function fetchMembers(setMembers) {
  try {
    const response = await axios.get("http://34.64.75.54/api/members");
    setMembers(response.data);
  } catch(e) {
    console.error(e);
  }
}

const MainScreen = ({ navigation }) => {
  const [members, setMembers] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchMembers(setMembers)
  },[isFocused])



  return (
    <View style={{ flex: 1, padding: 30 }}>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 30 , textAlign: "center"}}>경기 개설</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>시간</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>지역</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>인원 수</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>세부사항</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "내용을 입력해주세요"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Match Create"
          onPress={() => navigation.navigate('AddMember') }
        />
        <Button
          title="Matching Waiting List"
          onPress={() => navigation.navigate('MatchingWaitingList') }
        />  
      </View>
      <View style={{ flex: 8 }}>
      <FlatList
          data={members}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MemberItem member={item} />}
      />
      </View>
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 120,
    borderColor: '#7a42f4',
    borderWidth: 1
  }
  
})
