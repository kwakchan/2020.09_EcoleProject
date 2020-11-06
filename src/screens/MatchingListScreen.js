import React,{ useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Switch } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MatchingItem from '../components/MatchingItem';
import MyMatchingItem from '../components/MyMatchingItem';
import LocationItem from '../components/LocationItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  info: {
    marginTop: 15,
    marginLeft: 8,
    fontSize: 18
  },
  input: {
    margin: 7,
    width: '95%',
    height: 40,
    alignSelf: 'center',
    borderColor: "grey",
    borderWidth: 0.8
}
  
})

const myMatchings = [
  {
    id: 2,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/02 20:00',
    matching_count: '11명',
  },
  {
    id: 4,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/04 12:00',
    matching_count: '11명',
  }
];

const matchings = [
  {
    id: 1,
    team_name: '부산아스날',
    matching_location: '영도구',
    matching_time: '11/02 19:00',
    matching_count: '11명',
  },
  {
    id: 2,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/02 20:00',
    matching_count: '11명',
  },
  {
    id: 3,
    team_name: '드래곤팀',
    matching_location: '동래구',
    matching_time: '11/02 21:00',
    matching_count: '11명',
  },
  {
    id: 4,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/04 12:00',
    matching_count: '11명',
  },
  {
    id: 5,
    
    team_name: '거제향우회',
    matching_location: '강서구',
    matching_time: '11/05 12:00',
    matching_count: '5명',
  }
];


const MatchingListScreen = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <View  style={{ padding: 30 }}>
      <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', margin: 10 }}>경기 대기 목록</Text>
      
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={{ margin: 1, borderWidth: 1 }}>
        <Text style={{ fontSize: 10, margin: 5, fontWeight: 'bold' }}>내가 개설한 경기 목록</Text>
        <FlatList
          data={myMatchings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MyMatchingItem myMatching={item} />}
        />
      </View>

      <View style={{ margin: 1 }}> 
        <Text style={{ fontSize: 10, margin: 5, fontWeight: 'bold' }}>전체 경기 목록</Text>
        
        <LocationItem setLocation={(location) => console.log(location)} />

        <SearchBar
          placeholder="Team Seach"
          onChangeText={setSearch}
          value={search}
          onSubmitEditing={ ()=>  console.log('search:'+search)}
          containerStyle={{backgroundColor: '#DCDCDC'}}
          lightTheme round
          style={{margin: 5 }}
        />

        <FlatList
          data={matchings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MatchingItem matching={item} />}
        />
        
      </View>
      <Button
        title="경기개설"
      />

    </View>
  )
}

export default MatchingListScreen;