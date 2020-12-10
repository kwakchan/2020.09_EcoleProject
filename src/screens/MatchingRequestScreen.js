import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { SearchBar} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MatchingRequestItem from '../components/MatchingRequestItem';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from '../api';

import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault("Asia/Seoul");

async function getRequest(setRequest, id) {
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get(`/api/teams/${id}`, config);
    setRequest(res.data);
    console.log(res.data);
  } catch (error) {
    // console.log(res.data);
    console.log(error)
  }
}

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

const MatchingRequestScreen = ({ route }) => {
  const { id } = route.params;
  const [ request , setRequest] = useState(null);
  console.log(request)

  useEffect(() => {
    getRequest(setRequest, id);
  }, [])

  console.log("request" + request)

  const [search, setSearch] = useState('');

  return (
    <>
      {
        request ?
        <>
          {
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
      
      
            </View>
          }
        </>
        : <>{
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
            data={list} //request.applies
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MatchingRequestItem matchingRequest={item} />}
            style={{ margin: 10 }}
          />
    
    
          </View>
        }</>
      }
    </>

  )
}

export default MatchingRequestScreen;