import React from 'react';
import { View, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Button
                title="로그인페이지"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="회원가입페이지"
                onPress={() => navigation.navigate('SignUp')}
            />
            <Button
                title="_경기 상세"
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
                title="_팀 상세"
                onPress={() => navigation.navigate('TeamDetail')}
            />
            <Button
                title="_게시판 글 상세"
                onPress={() => navigation.navigate('BoardDetail')}
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
        </View>
    )
}

export default MainScreen;
