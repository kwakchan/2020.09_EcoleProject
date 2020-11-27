import React, { useEffect, useState } from 'react';
import { View, Text, Switch, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MatchingItem from '../components/MatchingItem';
import MyMatchingItem from '../components/MyMatchingItem';
import AllLocationItem from '../components/AllLocationItem';
import { Avatar } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault("Asia/Seoul");
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

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

async function getMatchingList(setMatchings, search, location) {
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get(`/api/matches?teamName=${search}&state=${location.state}&district=${location.district}`, config);
    console.log(`/api/matches?teamName=${search}&state=${location.state}&district=${location.district}`)
    setMatchings(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
}

const MatchingListScreen = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [showCal, setShowCal] = useState(false);
  const [location, setLocation] = useState();
  const [matchings, setMatchings] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false); //toggle
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); //toggle
  
  useEffect(() => {
    getMatchingList(setMatchings, search, location);
  }, [search, location])

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
                renderItem={({ item }) => <MyMatchingItem myMatching={item} navigation={navigation} />}
                style={{ margin: 10 }}
              />
            </View>
            :
            <View style={{ flex: 1, padding: 20 }}>
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
                <AllLocationItem setLocation={setLocation} />
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