import React, { useEffect, useState } from "react";
import { View, Text, Button, Picker } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import BoardItem from '../components/BoardItems'
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getBoardList(setBoards){
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get(`/api/boards`, config);
    setBoards(res.data);
  } catch (error) {
    console.log(error)
  }
}

const BoardListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('FREE');
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoardList(setBoards, search);
  }, [])

  return (
    <>
      <View style={{ flex: 1, padding: 20 }}>
        <SearchBar
          placeholder="Team Seach"
          onChangeText={setSearch}
          value={search}
          onSubmitEditing={() => console.log('search:' + search)}
          containerStyle={{ backgroundColor: '#DCDCDC' }}
          lightTheme round
          style={{ margin: 5, height: 5 }}
        />

        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => 
            {
              setSelectedValue(itemValue);
              console.log(selectedValue);
            }
            
          }
        >
          <Picker.Item label="자유게시판" value="FREE" />
          <Picker.Item label="용병 신청" value="INVITE" />
          <Picker.Item label="용병 찾기" value="FIND" />
        </Picker>

        <FlatList
          data={boards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BoardItem board={item} navigation={navigation}/>}
          style={{ backgroundColor: 'white' }}
        />

        <Button
          title="게시글 만들기"
          onPress={() => navigation.navigate('BoardCreate')}
        />

      </View>
    </>
  )
}
export default BoardListScreen;