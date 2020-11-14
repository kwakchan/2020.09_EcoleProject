import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MemberItem from '../components/MemberItem';
import RequestMemberItem from '../components/RequestMemberItem';

const existingmembers = [
  {
    name: ' 문소연'
  },
  {
    name: ' 김민수'
  },
  {
    name: ' 곽찬'
  },
  {
    name: ' 송가인'
  },
  {
    name: ' 임영웅'
  }
];

const requestmembers = [
  {
    name: ' 안세혁'
  },
  {
    name: ' 김종진'
  },
  {
    name: ' 박철오'
  },
  {
    name: ' 이상호'
  },
  {
    name: ' 변진성'
  },
  {
    name: ' 김현수'
  }
];

const TeamMemberScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#EDD81C" }}>
        <Text style={styles.text}>멤버</Text>
      </View>
      <FlatList style={styles.memberlist}
        data={existingmembers}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => <MemberItem member={item} />}
      />

      {/* 팀장일 경우에만 보임 */}
      <View style={{ backgroundColor: "#EDD81C" }}>
        <Text style={styles.text}>새로운 요청</Text>
      </View>
      <FlatList style={styles.memberlist}
        data={requestmembers}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => <RequestMemberItem requestmember={item} />}
      />
    </View>
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
