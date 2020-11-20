import React, { useState } from 'react';
import { View, Text, Switch, Button } from 'react-native';
import { SearchBar, Avatar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LocationItem from '../components/LocationItem';
import MatchingRequestItem from '../components/MatchingRequestItem';
import { Calendar } from 'react-native-calendars';
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

const MatchingRequestScreen = () => {

  const [search, setSearch] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [showCal, setShowCal] = useState(false);
  const [showMy, setShowMy] = useState(false);
  
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
          <View style={{ flex : 1, padding : 10 }}>
            <SearchBar
              placeholder="Team Seach"
              onChangeText={setSearch}
              value={search}
              onSubmitEditing={() => console.log('search:' + search)}
              containerStyle={{ backgroundColor: '#f2f2f2' }}
              lightTheme round
            /> 
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <LocationItem setLocation={(location) => console.log(location)} />
              <Button
                title="날짜선택"
                onPress={() => setShowCal(true)}
                color="#bdc6cf"
              />
            </View>
            
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
                    <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
                    <ListItem.Content>
                      <ListItem.Title >{item.team_name}</ListItem.Title>
                      <ListItem.Subtitle >{item.matching_count}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
            /> */}
            
          </View>

          

          
      }
    </>
    
  )
}

export default MatchingRequestScreen;