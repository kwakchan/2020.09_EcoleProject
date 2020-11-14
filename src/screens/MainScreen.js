import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { AuthContext } from "../../App";

const MainScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="경기 대기 상세 페이지로 이동"
        onPress={() => navigation.navigate('MatchingDetail')}
      />
      <Button
        title="마이페이지"
        onPress={() => navigation.navigate('MyPage')}
      />
      <Button
        title="경기 대기 목록"
        onPress={() => navigation.navigate('MatchingList')}
      />
      <Button
        title="경기 대기 생성"
        onPress={() => navigation.navigate('MatchingCreate')}
      />
      <Button
        title="팀 상세 페이지"
        onPress={() => navigation.navigate('TeamDetail')}
      />
      <Button
        title="팀 생성 페이지"
        onPress={() => navigation.navigate('TeamCreate')}
      />
      <Button
        title="게시판 생성 페이지"
        onPress={() => navigation.navigate('BoardCreate')}
      />
      <Button
        title="팀 목록 페이지" onPress={() => navigation.navigate('TeamList')}
      />
      <Button
        title="게시판 목록 페이지"
        onPress={() => navigation.navigate('BoardList')}
      />
      <Button
        title="팀 멤버"
        onPress={() => navigation.navigate('TeamMember')}
      />
      <Button
        title="로그아웃"
        onPress={() => signOut()}
      />
    </View>
  );
}

export default MainScreen;
