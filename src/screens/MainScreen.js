import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30 }}>Member List</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Add Member"
          onPress={() => navigation.navigate('AddMember') }
        />
      </View>
      <View style={{ flex: 8 }}>
      </View>
    </View>
  )
}

export default MainScreen;