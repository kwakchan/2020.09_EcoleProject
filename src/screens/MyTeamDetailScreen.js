//마이페이지 - 팀상세

import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, Alert, } from "react-native";
import { Button, ListItem, Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { api } from '../api';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';


// import Icon from 'react-native-vector-icons/FontAwesome';

async function getTeam(setTeam, teamId) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get(`/api/teams/${teamId}`, config);
    setTeam(res.data);
    console.log(res.data);

  } catch (err) {
    //console.log(err);
  }
}

const MyTeamDetailScreen = ({ route, navigation }) => {
  const teamId = route.params.id;
  const [team, setTeam] = useState(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    getTeam(setTeam, teamId);
  }, [isFocused])

  const exitButtonAlert = () =>
    Alert.alert(
      "팀 탈퇴",
      `팀을 탈퇴하시겠습니까?`,
      [
        {
          text: "취소",
          onPress: () => console.log("팀 탈퇴 취소"),
          style: "cancel"
        },
        {
          text: "확인", onPress: () => {

            console.log("팀 탈퇴 성공")
            navigation.navigate('MyPage');
          }
        }
      ],
      { cancelable: false }
    );

  return (
    <>
      {/* {console.log(route.params)} */}
      {
        team ?
          <ScrollView style={styles.background}>
            <View style={styles.teamprofile}>
              <Image source={{ uri: team.logopath }} style={{ width: 100, height: 100, borderRadius: 150 / 2 }} />
              <View style={{ flexDirection: 'column' }}>
                <Text styles={styles.teamname} style={{ fontSize: 20 }}>{team.name}</Text>
              </View>
            </View>

            {
              team.isOwner === false
                ?
                <>
                  <View>

                    <View style={{ marginBottom: 30 }}>
                      <ListItem bottomDivider>
                        <Icon name='room' />
                        <ListItem.Content>
                          <ListItem.Title >지역</ListItem.Title>
                          <ListItem.Subtitle >{team.state} {team.district}</ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                      <ListItem bottomDivider>
                        <Icon name='info' />
                        <ListItem.Content>
                          <ListItem.Title >설명</ListItem.Title>
                          <ListItem.Subtitle >{team.description}</ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                    </View>
                  </View>


                  <View style={{ marginBottom: 30 }}>
                    <Button
                      onPress={() => {
                        navigation.navigate('TeamMember',
                          { id: teamId });
                      }}
                      title="팀원 목록"
                      type="outline"
                    />
                  </View>

                  <View>
                    <Button
                      onPress={exitButtonAlert}
                      title="팀 탈퇴"
                    />
                  </View>
                </>
                :
                <>
                  <View>
                    <Button
                      onPress={() => {
                        navigation.navigate('EditTeamInformation', { team: team })
                      }}
                      title="팀 정보 수정"
                    />

                    <View style={{ marginBottom: 30 }}>
                      <ListItem bottomDivider>
                        <Icon name='room' />
                        <ListItem.Content>
                          <ListItem.Title >지역</ListItem.Title>
                          <ListItem.Subtitle >{team.state} {team.district}</ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                      <ListItem bottomDivider>
                        <Icon name='info' />
                        <ListItem.Content>
                          <ListItem.Title >설명</ListItem.Title>
                          <ListItem.Subtitle >{team.description}</ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                    </View>
                  </View>


                  <View style={{ marginBottom: 30 }}>
                    <Button
                      onPress={() => {
                        navigation.navigate('TeamMember',
                          { id: teamId });
                      }}
                      title="팀원 목록"
                      type="outline"
                    />
                  </View>

                </>

            }



            {/* <Text>{team.name}</Text>
            <Image style={styles.image} source={{ uri: team.logopath }} /> */}

          </ScrollView>
          :
          <Text>Loading...</Text>
      }
    </>


  );
}


const styles = StyleSheet.create({
  background: {
    margin: 30
  },
  image: {
    height: 160,
    width: 160,
    borderWidth: 0.5,
    borderColor: "black",
    marginTop: 30
  },
  teamprofile: {
    margin: 20,
    alignItems: 'center'
  },
  teamname: {
    marginLeft: 10,
    alignContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },
  oxbutton: {
    marginTop: 30,
    marginBottom: 30
  }
});

export default MyTeamDetailScreen;