import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LocationItem from '../components/LocationItem';
import TeamItem from '../components/TeamItem'
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getTeamList(setTeams, search){
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: {
          Authorization: token
        }
      }  
      const res = await api.get(`/api/teams?teamName=${search}`, config);
      console.log(res.data);
      setTeams(res.data);
    } catch (error) {
      console.log(error)
    }
}

const TeamListScreen = ({ navigation }) => {
  const [search, setSearch] = useState(''); 
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamList(setTeams, search);
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
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <LocationItem all setLocation={(location) => console.log(location)} />
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