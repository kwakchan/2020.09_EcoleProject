import React from 'react';
import { Button, View, Text, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import TeamDetailScreen from './TeamDetailScreen';

const dummyData = {
  username: "김호랑",
  birthdate: "1996.08.21",
  location: "부산",
  position: "CB",
  height: "200",
  weight: "100",
  foot: "오른발",
  image: 'https://ichef.bbci.co.uk/news/240/cpsprodpb/1675A/production/_113249919_hi061718491.jpg'
  
}

const teamdummyData = {
  teamname: "팀 고양이",
  image: 'https://reactnative.dev/docs/assets/p_cat2.png',
  memo: "열심히 합시다"
}

const createThreeButtonAlert = (navigation) =>
    Alert.alert(
        "팀 탈퇴",
        "팀에서 정말 탈퇴하시겠습니까",
        [
            {
                text: "취소",
            onPress: () => console.log("Cancel Pressed"),
         
    
               style: "cancel"
            },
            { 
                text: "확인", 
                onPress: () => {console.log("Leave The Team") ,
                navigation.navigate('MyPage')}, 
            }
        ],
        { cancelable: false }
    );

const MyPageScreen = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5, borderWidth: 1 }}>
          <View style={{ flex: 1.2, flexDirection: 'row' }}>
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.teamname}>개인 정보</Text>

              <Image
                source={{
                  uri: dummyData.image,
                }}

                style={styles.image}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"  내 정보 수정  "}
                onPress={() => navigation.navigate('EditMyInformation')}
              />
              <Text></Text>
              {/* <Button title={"  로그아웃  "}
                onPress={() => navigation.navigate('Login')} /> */}
            </View>

          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>

                <Text style={styles.font}>이름 : </Text>
                <Text style={styles.font}>생년월일 :</Text>
                <Text style={styles.font}>지역 :</Text>
                <Text style={styles.font}> </Text>

              </View>
              <View style={{ flex: 1.4 }}>
                <Text style={styles.font}>{dummyData.username}</Text>
                <Text style={styles.font}>{dummyData.birthdate}</Text>
                <Text style={styles.font}>{dummyData.location} </Text>


              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.font}>포지션 : </Text>

                <Text style={styles.font}>키  :</Text>
                <Text style={styles.font}>몸무게 : </Text>
                <Text style={styles.font}>주발 : </Text>
                <Text> </Text>
              </View>
              <View style={{ flex: 1.4 }}>
                <Text style={styles.font}>{dummyData.position} </Text>

                <Text style={styles.font}>{dummyData.height} </Text>
                <Text style={styles.font}>{dummyData.weight} </Text>
                <Text style={styles.font}>{dummyData.foot} </Text>
                <Text> </Text>
              </View>
            </View>


          </View>
        </View>
        <View style={{ flex: 1, borderWidth: 1, flexDirection: 'row' }}>
          <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={styles.teamname}>팀 정보</Text>
            <Image
              source={{
                uri: teamdummyData.image,
              }}
              style={styles.image}
            />
            <Text style={styles.teamname}>{teamdummyData.teamname}</Text>
            <Text style={styles.fontleft} >팀 설명                                                                      </Text>
            <Text style={styles.teammemo}>{teamdummyData.memo}</Text>

          </View>
          <View style={styles.button}>
            {/* 팀 목록 페이지로 이동 */}
            <Button title={"  팀 목록  "}
              onPress={() => {}} />
            <Text></Text>
            {/* 팀 목록 페이지로 이동 */}
            <Button title={"  팀원 목록  "}
            onPress={() => navigation.navigate('TeamMemberScreen')} />            
            <Text></Text>
            {/* 팀장일 경우에 팀 정보 수정  */}
            <Button title={"  팀 정보 수정  "}
              onPress={() => navigation.navigate('EditTeamInformation')} />
            <Text></Text>
            {/* 팀원일 경우에 팀 탈퇴 버튼 */}
            <Button title={"팀 탈퇴"} onPress={() => createThreeButtonAlert(navigation)} />
            <Text></Text>
            {/* 팀 소속이 아닐 경우 팀 개설페이지로 이동 */}
            <Button title={"팀 개설"} onPress={MyPageScreen} />


          </View>
        </View>
      </View>
    </ScrollView>
  );

}



const styles = StyleSheet.create({
  font: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 7
  },
  fontleft: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 7,
    textAlign : 'left'
    
  },

  button: {

    justifyContent: 'flex-end',


  },


  teamname: {
    fontSize: 30,
    margin: 5,
    textAlign: 'center'


  },

  image: {
    height: 160,
    width: 160,
    borderWidth: 0.5,
    borderColor: "black"

  }, 
  teammemo: {
    margin: 7,
    width: '95%',
    height: 120,
    alignSelf: 'center',
    borderColor: "grey",
    borderWidth: 0.8,
    
},

});

export default MyPageScreen;