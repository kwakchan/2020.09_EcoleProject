import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LocationItem from '../components/LocationItem';
import TeamItem from '../components/TeamItem'

const teams = [
    {
        id: 1,
        team_name: '부산아스날',
        team_location: 'Busan',
        team_birth: '2012/11/02 ',
        team_count: '11명'
    },
    {
        id: 2,
        team_name: '경성대',
        team_location: 'Busan',
        team_birth: '1999/07/02 ',
        team_count: '27명'
    },
    {
        id: 3,
        team_name: '드래곤팀',
        team_location: 'Busan',
        team_birth: '1996/08/02 ',
        team_count: '12명'
    },
    {
        id: 4,
        team_name: '윙가디움레비오우사',
        team_location: 'Busan',
        team_birth: '2001/02/02 ',
        team_count: '27명'
    },
    {
        id: 5,
        team_name: '거제향우회',
        team_location: 'Busan',
        team_birth: '2010/01/02 ',
        team_count: '98명'
    }

];

const TeamListScreen = ({ navigation }) => {
  const [search, setSearch] = useState(''); 

  return (
    <>
        <View style={{ flex: 1, padding: 20 }}>

            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', margin: 10 }}>팀 목록</Text>

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
                data={teams}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TeamItem team={item} navigation={navigation}/>}
                style={{ backgroundColor: 'white' }}
            />

            <Button
                title="게시글 만들기"
                onPress={() => navigation.navigate('TeamCreate')}
            />

        </View>
    </>
   
  )
}
export default TeamListScreen;