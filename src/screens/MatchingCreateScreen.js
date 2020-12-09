import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, ActivityIndicator } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import LocationItem from '../components/LocationItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';

async function PostMatching(data, navigation) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': token
      }
    }
    const res = await api.post('/api/matches', data, config);
    console.log(res);
    navigation.navigate('MatchingList');
  } catch (err) {
    console.log(err)
  }
}

async function getProfile(setAccount) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': token
      }
    }
    const res = await api.get('/api/accounts/profile', config);
    setAccount(res.data);
    console.log(res.data)
  } catch (err) {
    console.log(err);
  }
}



const MatchingCreateScreen = ({ navigation }) => {

  const [showCal, setShowCal] = useState(false);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [location, setLocation] = useState('');
  const [countMember, setCountMember] = useState('');
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState(null);

  useEffect(() => {
    getProfile(setAccount);
  }, [])


  return (
    <>
      {
        account ?
          account.leadingTeam ?
            showCal ?
              <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                <CalendarList
                  horizontal={true}
                  pagingEnabled={true}
                  futureScrollRange={50}

                  current={moment().format('YYYY-MM-DD')}
                  minDate={moment().format('YYYY-MM-DD')}
                  maxDate={'2022-12-31'}
                  onDayPress={(day) => {
                    setDate(day.dateString);
                    setShowCal(false);
                  }}
                  monthFormat={'yyyy-MM-dd'}
                  hideExtraDays={true}
                  enableSwipeMonths={true}
                  markedDates={{
                    [date]: { selected: true, marked: true, selectedColor: 'blue' }
                  }}
                />
              </View>
              :
              <ScrollView>
                <View style={{ flex: 1, padding: 10 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, textAlign: "center" }}>경기 개설</Text>
                  </View>
                  <View style={styles.container}>
                    <Button title="날짜" onPress={() => setShowCal(true)} />
                    <Text style={{ fontSize: 25, textAlign: "center" }}>{date}</Text>
                    <View>
                      <Text style={styles.info}>지역</Text>

                      <LocationItem setLocation={setLocation} />

                    </View>

                    <View>
                      <Text style={styles.info}>인원 수</Text>
                      <TextInput
                        onChangeText={setCountMember}
                        value={countMember}
                        style={styles.input}
                        placeholder="  00명 숫자만 입력하여 주세요"
                        placeholderTextColor="grey"
                      />
                    </View>

                    <View>
                      <Text style={styles.info}>세부사항</Text>
                      <TextInput
                        onChangeText={setDescription}
                        value={description}
                        style={styles.input}
                        placeholder="  내용을 입력 해 주세요"
                        placeholderTextColor="grey"
                        maxLength={200}
                      />
                    </View>
                  </View>

                  <View style={buttonstyles.button}>
                    <Button title="매칭생성하기"
                      onPress={() => {
                        const data = {
                          countMember: countMember,
                          description: description,
                          date: date,
                          ...location
                        }
                        console.log(data)
                        PostMatching(data, navigation);
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
              :
              <Text>팀장만 개설할 수 있습니다.</Text>
            :
            <ActivityIndicator />
      }
    </>
  )

}

export default MatchingCreateScreen;

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

const buttonstyles = StyleSheet.create({
  button: {
    margin: 30,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  }
})