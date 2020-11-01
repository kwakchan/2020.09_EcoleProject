import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate('LoginScreen')}
            />
            <Button
                title="경기 대기 상세 페이지로 이동"
                onPress={() => navigation.navigate('MatchingWaitDetail')}
            />

            <Button
                title="Login"
                onPress={() => navigation.navigate('LoginScreen')}
            />
        </View>

    )
}
<<<<<<< HEAD
export default App;
=======

export default MainScreen;
>>>>>>> 0e16c15... Mypage추가
