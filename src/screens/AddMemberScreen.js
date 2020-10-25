import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddMemberScreen = () => {
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 30 }}>Add Member</Text>
      <Text>Name</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="추가"></Button>
    </View>
  )
}

export default AddMemberScreen;