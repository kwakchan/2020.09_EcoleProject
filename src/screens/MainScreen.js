import React, {Component} from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';



const MainScreen = ({ navigation }) => {


  return (
    <View style={{ flex: 1, padding: 30 }}>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 30 , textAlign: "center"}}>경기 개설</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>시간</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>지역</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>인원 수</Text>
      </View>
      <View>
      <Text style={{ fontSize: 30 }}>세부사항</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "내용을 입력해주세요"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Match Create"
          onPress={() => navigation.navigate('AddMember') }
        />
      </View>
      <View style={{ flex: 8 }}>
      </View>
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 120,
    borderColor: '#7a42f4',
    borderWidth: 1
  }
  
})