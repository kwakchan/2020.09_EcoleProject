import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { api } from '../api';
import MemberItem from '../components/MemberItem';
import RequestMemberItem from '../components/RequestMemberItem';

async function getTeamMember(setTeam, id) {
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get(`/api/teams/${id}`, config);
    setTeam(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
}


const TeamMemberScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [team, setTeam] = useState(null);

  useEffect(() => {
    getTeamMember(setTeam, id);
  }, [])

  return (
    <>
      {
        team?
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: "#EDD81C" }}>
            <Text style={styles.text}>멤버</Text>
          </View>
          <FlatList style={styles.memberlist}
            data={team.accounts.teamsAccountsDTOS}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MemberItem member={item} />}
          />

          {/* 팀장일 경우에만 보임 */}
          <View style={{ backgroundColor: "#EDD81C" }}>
            <Text style={styles.text}>새로운 요청</Text>
          </View>

          <RequestMemberItem requestmember={team.owner} />


        </View>:
        <Text>Loading...</Text>
      }
    </>
  )

}

export default TeamMemberScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    alignSelf: 'center'
  },
  memberlist: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 2
  }
})