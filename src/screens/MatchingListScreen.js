import React, { useState } from 'react';
import { View, Text, Switch, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MatchingItem from '../components/MatchingItem';
import MyMatchingItem from '../components/MyMatchingItem';
import LocationItem from '../components/LocationItem';
import { Avatar } from 'react-native-elements';

import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import 'moment-timezone';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apisAreAvailable } from 'expo';
moment.tz.setDefault("Asia/Seoul");


const myMatchings = [
  {
    id: 2,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/02 20:00',
    matching_count: '11명',
    matching_contents: '덤벼 덤벼!'
  },
  {
    id: 4,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/04 12:00',
    matching_count: '11명',
    matching_contents: '덤벼 덤벼!'
  }
];

const matchings = [
  {
    id: 1,
    team_name: '부산아스날',
    matching_location: '영도구',
    matching_time: '11/02 19:00',
    matching_count: '11명',
    matching_contents: '덤벼 덤벼!'
  },
  {
    id: 2,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/02 20:00',
    matching_count: '11명',
    matching_contents: '덤벼 덤벼!'
  },
  {
    id: 3,
    team_name: '드래곤팀',
    matching_location: '동래구',
    matching_time: '11/02 21:00',
    matching_count: '11명',
    matching_contents: '덤벼 덤벼!'
  },
  {
    id: 4,
    team_name: '경성대',
    matching_location: '남구',
    matching_time: '11/04 12:00',
    matching_count: '11명',
    matching_contents: '덤벼 덤벼!'
  },
  {
    id: 5,
    team_name: '거제향우회1',
    matching_location: '강서구',
    matching_time: '11/05 12:00',
    matching_count: '5명',
    matching_contents: '덤벼 덤벼!'
  },
  {
    id: 6,
    team_name: '거제향우회1',
    matching_location: '강서구',
    matching_time: '11/05 12:00',
    matching_count: '5명',
    matching_contents: '덤벼 덤벼!'
  }
];

// async function getMatchingList(data){
//   try {
//     const res = await api.post('/api/matching', data, config);
//     console.log(res);
//   } catch (error) {
//     console.log(err)
//   }
// }

const MatchingListScreen = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [showCal, setShowCal] = useState(false);
  const [showMy, setShowMy] = useState(false);
  
  const [isEnabled, setIsEnabled] = useState(false); //toggle
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); //toggle
  return (
    <>
      { 
        showCal ?
          <Calendar
            horizontal={true}
            pagingEnabled={true}
            futureScrollRange={50}
            current={moment().format('YYYY-MM-DD')}
            minDate={moment().format('YYYY-MM-DD')}
            maxDate={'2020-11-30'}
            onDayPress={(day) => {
              setDate(day.dateString);
              setShowCal(false);
              console.log('selected day: ', date)
            }}
            monthFormat={'yyyy-MM-dd'}
            hideExtraDays={true}
            markedDates={{
              // '2020-11-12': { startingDay: true, startingDay: true, color: 'skyblue'},
              // '2020-11-13': { endingDay: true, startingDay: true, color: 'skyblue'},
              [date]: { selected: true, marked: true, selectedColor: 'blue' }
            }}
            markingType={'period'}
          />
          :
          isEnabled ?
          <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', margin: 10 }}>내가 개설한 경기 목록</Text>
            <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
            />  
            <View style={{ alignItems: 'center' }}>
              <Avatar
                size="large"
                rounded title="팀"
                containerStyle={{ backgroundColor: "gray" }}
              />
              <Text style={{ fontSize: 30 }}> 경성대 </Text>
            </View>

            <FlatList
              data={myMatchings}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MyMatchingItem myMatching={item} navigation={navigation}/>}
              style={{ margin: 10 }}
            />
          </View>  
          :
          <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', margin: 10 }}>전체 경기 목록</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
             />
            <SearchBar
              placeholder="Team Seach"
              onChangeText={setSearch}
              value={search}
              onSubmitEditing={() => console.log('search:' + search)}
              containerStyle={{ backgroundColor: '#DCDCDC' }}
              lightTheme round
              style={{ margin: 5 }}
            /> 
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <LocationItem all setLocation={(location) => console.log(location)} />
            </View>
            <Button
              title="날짜선택"
              onPress={() => setShowCal(true)}
              color="gray"
            />
            <FlatList
              data={matchings}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MatchingItem matching={item} navigation={navigation} />}
            />
            <Button
              title="경기개설"
              onPress={() => navigation.navigate('MatchingCreate')}
            />
          </View>
            
      }


    </>
  )
}

export default MatchingListScreen;