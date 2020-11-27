import React, { useState } from 'react';
import { View} from 'react-native';
import { SearchBar} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MatchingRequestItem from '../components/MatchingRequestItem';
import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault("Asia/Seoul");

const list = [
  {
    id: 1,
    team_name: '날아라슈퍼보드',
    matching_count: '11명'
  },
  {
    id: 2,
    team_name: '치키치키',
    matching_count: '11명'
  },
  {
    id: 3,
    team_name: '차카차카',
    matching_count: '11명'
  },
  {
    id: 4,
    team_name: '초코초코초',
    matching_count: '11명'
  },
  {
    id: 5,
    team_name: '돈데기리',
    matching_count: '5명'
  },
  {
    id: 6,
    team_name: '돈데크만',
    matching_count: '5명'
  },
  {
    id: 7,
    team_name: '날아라슈퍼보드',
    matching_count: '11명'
  },
  {
    id: 8,
    team_name: '치키치키',
    matching_count: '11명'
  },
  {
    id: 9,
    team_name: '차카차카',
    matching_count: '11명'
  },
  {
    id: 10,
    team_name: '초코초코초',
    matching_count: '11명'
  },
  {
    id: 11,
    team_name: '돈데기리',
    matching_count: '5명'
  },
  {
    id: 12,
    team_name: '돈데크만',
    matching_count: '5명'
  }
];

const MatchingRequestScreen = (na) => {

  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SearchBar
        placeholder="Team Seach"
        onChangeText={setSearch}
        value={search}
        onSubmitEditing={() => console.log('search:' + search)}
        containerStyle={{ backgroundColor: '#f2f2f2' }}
        lightTheme round
      />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MatchingRequestItem matchingRequest={item} />}
        style={{ margin: 10 }}
      />

      {/* <View
        {
          list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar size="medium" rounded title={team_name.substring(0, 1)} containerStyle={{ backgroundColor: "gray" }} />
            <ListItem.Content>
              <ListItem.Title >{item.team_name}</ListItem.Title>
              <ListItem.Subtitle >{item.matching_count}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
        }
      /> */}

    </View>

  )
}

export default MatchingRequestScreen;