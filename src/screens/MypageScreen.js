import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';


class MypageScreen extends Component {

  render(props) {
    return (
      // 전체
      <View style={{ flex: 1 }}>

        {/* 위아래 나누기 */}
        <View style={{ flex: 1.5 }}>

          {/* 초록핑크나누기 */}
          <View style={{ flex: 1.2, flexDirection: 'row' }}>
          
            {/* 초록빨강 가로나누기 */}
            <View style={{ flex: 4,justifyContent:'center', alignItems:'center'}}>
              <Image
                source={{
                  uri: 'https://ichef.bbci.co.uk/news/240/cpsprodpb/1675A/production/_113249919_hi061718491.jpg',
                }}
                style={{
                height: 160, width: 160
                }}
              />
            </View>

            <View style={{ flex: 1.3, marginTop : 50 ,justifyContent:'flex-end' }}>
            <Button
              title="  내 정보 수정  "
              color="skyblue"

            />
            <Text></Text>
             <Button
              title="  로그아웃  "
              color="skyblue"

            /></View>

          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={{ flex: 1,flexDirection: 'row' }}>
             <View style={{ flex: 1 }}>
              <Text></Text>
             <Text style={{ fontSize: 18 }}>닉네임 : </Text>
             <Text></Text>
              <Text style={{ fontSize: 18 }}>생년월일 :</Text><Text></Text>
              <Text style={{ fontSize: 18 }}>지역 :</Text><Text></Text>
              <Text style={{ fontSize: 18 }}> </Text>
              <Text> </Text>
                </View> 
                <View style={{ flex: 1.4}}><Text></Text>
                <Text style={{ fontSize: 18 }}>김호랑 </Text><Text></Text>
              <Text style={{ fontSize: 18 }}>1996.08.21 </Text><Text></Text>
              <Text style={{ fontSize: 18 }}>부산 </Text><Text></Text>
              <Text style={{ fontSize: 18 }}> </Text>
              <Text> </Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text></Text>
             <Text style={{ fontSize: 18 }}>포지션 : </Text>
             <Text></Text>
              <Text style={{ fontSize: 18 }}>주 발 :</Text><Text></Text>
              <Text style={{ fontSize: 18 }}>키  :</Text><Text></Text>
              <Text style={{ fontSize: 18 }}>몸무게 : </Text>
              <Text> </Text>
                </View> 
                <View style={{ flex: 1.4 }}><Text></Text>
                <Text style={{ fontSize: 18 }}>ST </Text><Text></Text>
              <Text style={{ fontSize: 18 }}>오른발 </Text><Text></Text>
              <Text style={{ fontSize: 18 }}>196 </Text><Text></Text>
              <Text style={{ fontSize: 18 }}>100 </Text>
              <Text> </Text>
                </View>
            </View>


          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 4 ,justifyContent:'center', alignItems:'center'}}>
          <Image
                source={{
                  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{
                height: 160, width: 160
                }}
              />
              <Text style={{ fontSize: 25 }}>팀 고양이</Text>

          </View>
          <View style={{ flex: 1.1, marginTop: 100 ,justifyContent:'flex-end'}}>
            <Button
              title="팀 정보 보기"
              color="skyblue"

            />
             
          </View>


        </View>

      </View>
    );
  }
}
export  default MypageScreen;