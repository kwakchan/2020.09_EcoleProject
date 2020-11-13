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
                title="경기 대기 상세 페이지로 이동"
                onPress={() => navigation.navigate('MatchingWaitDetail')}
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
                title="팀 멤버"
                onPress={() => navigation.navigate('TeamMember')}
            />
        </View>
    )
}

export default MainScreen;
