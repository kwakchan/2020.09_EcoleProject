import React from 'react';
import { Button, View, Text, Image, StyleSheet, Alert, ScrollView } from 'react-native';


const createThreeButtonAlert = () =>
  Alert.alert(
    "팀 탈퇴",
    "팀에서 정말 탈퇴하시겠습니까",
    [
      {
        text: "취소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "확인", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

const MyPageScreen = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5, borderWidth :1}}>
          <View style={{ flex: 1.2, flexDirection: 'row' }}>
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.teamname}>개인 정보</Text>

              <Image
                source={{
                  uri: 'https://ichef.bbci.co.uk/news/240/cpsprodpb/1675A/production/_113249919_hi061718491.jpg',
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
              <Button title={"  로그아웃  "}
                onPress={() => navigation.navigate('Login')} />
            </View>

          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>

                <Text style={styles.font}>닉네임 : </Text>
                <Text style={styles.font}>생년월일 :</Text>
                <Text style={styles.font}>지역 :</Text>
                <Text style={styles.font}> </Text>

              </View>
              <View style={{ flex: 1.4 }}>
                <Text style={styles.font}>김호랑 </Text>
                <Text style={styles.font}>1996.08.21 </Text>
                <Text style={styles.font}>부산 </Text>


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
                <Text style={styles.font}>ST </Text>

                <Text style={styles.font}>196 </Text>
                <Text style={styles.font}>100 </Text>
                <Text style={styles.font}>오른발 </Text>
                <Text> </Text>
              </View>
            </View>


          </View>
        </View>
        <View style={{ flex: 1,borderWidth :1, flexDirection: 'row' }}>
          <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={styles.teamname}>팀 정보</Text>
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={styles.image}
            />
            <Text style={styles.teamname}>팀 고양이</Text>


          </View>
          <View style={styles.button}>
            {/* 팀 목록 페이지로 이동 */}
            <Button title={"  팀 목록  "}
              onPress={MyPageScreen} />
         <Text></Text>
            {/* 팀장일 경우에 팀 정보 수정  */}
            <Button title={"  팀 정보 수정  "} 
              onPress={() => navigation.navigate('EditTeamInformation')} />
            <Text></Text>
            {/* 팀원일 경우에 팀 탈퇴 버튼 */}
            <Button title={"팀 탈퇴"} onPress={createThreeButtonAlert} />
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

  }

});

export default MyPageScreen;