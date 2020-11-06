import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { STATES } from '../constants/constants';

const styles = StyleSheet.create({
    container: {
      paddingTop: 10
    },
    info: {
      marginTop: 15,
      marginLeft: 8,
      fontSize: 18
    },
    input: {
      margin: 7,
      width: '95%',
      height: 40,
      alignSelf: 'center',
      borderColor: "grey",
      borderWidth: 0.8
  }  
})

const LocationItem = (props) => {
  const setLocation = props.setLocation;
  const [state, setState] = useState('Busan');
  const [district, setDistrict] = useState('All');  
  
  return (
    <View style={styles.container}>
    <Picker
      selectedValue={state}
      style={{height: 50, width: 150}}
      onValueChange={(itemValue, itemIndex) => {
        setState(itemValue);
        setLocation({
          state: itemValue,
          district: district
        });
      }
      }>
      <Picker.Item label="부산광역시" value="Busan" />
      <Picker.Item label="서울특별시" value="Seoul" />
    </Picker>
    
    <Picker
      selectedValue={district}
      style={{height: 50, width: 150}}
      onValueChange={(itemValue, itemIndex) => {
        setDistrict(itemValue);
        setLocation({
          state: state,
          district: itemValue
        });
      }}>
      {
        STATES[state].map(
          ({label, value}) => <Picker.Item key={label+value} label={label} value={value} />
        )
      }
    </Picker>
  </View>
  );
};  

export default LocationItem;