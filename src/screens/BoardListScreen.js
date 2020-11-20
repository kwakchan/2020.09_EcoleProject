import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LocationItem from '../components/LocationItem';
import BoardItem from '../components/BoardItems'

const boards = [
  {
    id: 1,
    board_type: '[자유게시판]',
    board_timestamp: '2020-11-14',
    board_title: '방가방가 반가워요',
    board_writer: '남도산',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  },
  {
    id: 2,
    board_type: '[용병찾기/신청]',
    board_timestamp: '2020-11-14',
    board_title: '경성대근처 윙어구함',
    board_writer: '도날드',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  },
  {
    id: 3,
    board_type: '[멤버찾기/신청]',
    board_timestamp: '2020-11-14',
    board_title: '거제향우회 팀원 구합니다',
    board_writer: '올거제',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  }, {
    id: 4,
    board_type: '[자유게시판]',
    board_timestamp: '2020-11-14',
    board_title: '방가방가 반가워요',
    board_writer: '남도산',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  },
  {
    id: 5,
    board_type: '[용병찾기/신청]',
    board_timestamp: '2020-11-14',
    board_title: '경성대근처 윙어구함',
    board_writer: '도날드',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  },
  {
    id: 6,
    board_type: '[멤버찾기/신청]',
    board_timestamp: '2020-11-14',
    board_title: '거제향우회 팀원 구합니다',
    board_writer: '올거제',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  },
  {
    id: 7,
    board_type: '[멤버찾기/신청]',
    board_timestamp: '2020-11-14',
    board_title: '거제향우회 팀원 구합니다',
    board_writer: '올거제',
    board_contents: "이미 나에게로 하여 집착하게 만든 너 실패에 주저앉은 처참한 날 본후 다시 용기얻는 모습 생각하며 날 사랑해 줄 수 있겠니"
  }
];

const BoardListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <View style={{ flex: 1, padding: 20 }}>

        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', margin: 10 }}>게시판 목록</Text>

        <SearchBar
          placeholder="Team Seach"
          onChangeText={setSearch}
          value={search}
          onSubmitEditing={() => console.log('search:' + search)}
          containerStyle={{ backgroundColor: '#DCDCDC' }}
          lightTheme round
          style={{ margin: 5, height: 5 }}
        />
        <View style={{ flexDirection: "row" }}>
          <LocationItem setLocation={(location) => console.log(location)} />
        </View>

        <FlatList
          data={boards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BoardItem board={item} navigation={navigation}/>}
          style={{ backgroundColor: 'white' }}
        />

        <Button
          title="팀 만들기"
          onPress={() => navigation.navigate('BoardCreate')}
        />

      </View>
    </>
  )
}
export default BoardListScreen;