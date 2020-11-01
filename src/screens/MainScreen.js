import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {

  return (

    <View style={{ flex: 1 }}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>

  )
}

export default MainScreen;
