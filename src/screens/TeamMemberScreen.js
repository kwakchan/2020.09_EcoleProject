import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { api } from '../api';
import MemberItem from '../components/MemberItem';
import RequestMemberItem from '../components/RequestMemberItem';

//id값을 보내고 data를 받아옴
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
    console.log(res.data);
    console.log(error)
  }
}

const TeamMemberScreen = ({ route }) => {
  const { id, owner } = route.params;
  const [team, setTeam] = useState(null);

  useEffect(() => {
    getTeamMember(setTeam, id);
  }, [])

  return (
    <>
      {
        //불러온 값이 있다면
        team ?
          <View style={{ flex: 1 }}>
            {
              //팀장이 아니면 멤버목록만 불러옴
              owner === false
                ?
                <>
                  <View style={{ backgroundColor: "#EDD81C" }}>
                    <Text style={styles.text}>멤버</Text>
                  </View>
                  <FlatList style={styles.memberlist}
                    data={team.accounts.teamsAccountsDTOS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <MemberItem member={item} />}
                  />
                </>
                //팀장이면 멤버목록과 새로운 요청 불러옴
                :
                <>
                  <View style={{ backgroundColor: "#EDD81C" }}>
                    <Text style={styles.text}>멤버</Text>
                  </View>
                  <FlatList style={styles.memberlist}
                    data={team.accounts.teamsAccountsDTOS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <MemberItem member={item} />}
                  />

                  <View style={{ backgroundColor: "#EDD81C" }}>
                    <Text style={styles.text}>새로운 요청</Text>
                  </View>
                  <FlatList style={styles.memberlist}
                    data={team.applies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <RequestMemberItem requestmember={item} />}
                  />
                </>
            }
          </View>
          //불러온 값이 없다면
          :
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