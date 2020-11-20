import moment from 'moment';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import 'moment-timezone';
import LocationItem from '../components/LocationItem';
moment.tz.setDefault("Asia/Seoul");

state = {
  selectedHours: 0,
  selectedMinutes: 0,
};  ``

const MatchingModifyScreen = ({ navigation }) => {

  const [showCal, setShowCal] = useState(false);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [location, setLocation] = useState('');
  const [count, setCount] = useState('');
  const [etc, setEtc] = useState('');

  return (
    <>
      {
        showCal ?
          <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
            <CalendarList

              // 가로 스크롤링을 할 지 여부. 기본값은 false입니다.
              horizontal={true}

              // 페이지처럼 넘길 지 여부. 기본값은 false입니다.
              // true로 할 경우, 부드럽게 스크롤링이 되는 게 아니라 페이지를 넘기는 듯한 효과로 바뀝니다.
              pagingEnabled={true}

              // 과거로 스크롤 할 수 있는 개월 수. 기본값은 50입니다. 
              // 50이면 현재를 기준으로 50개월 전까지 스크롤 가능합니다.
              //pastScrollRange={50}

              // 미래로 스크롤 할 수 있는 개월 수. 기본값은 50입니다.
              // 50이면 현재를 기준으로 50개월 후까지 스크롤 가능합니다.
              futureScrollRange={50}

              current={moment().format('YYYY-MM-DD')}
              minDate={moment().format('YYYY-MM-DD')}
              maxDate={'2020-11-30'}
              onDayPress={(day) => {
                setDate(day.dateString);
                setShowCal(false);
                console.log('selected day', day)
              }}
              monthFormat={'yyyy-MM-dd'}
              //onMonthChange={(month) => { console.log('month changed', month) }}
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
              <View style={styles.container}>

                <View>
                  <Text style={styles.info}>날짜</Text>
                  <View style={{ flexDirection: 'row',}}>
                    <Text style={{ fontSize: 15, padding:10 }}>{date}</Text>
                    <Button title="변경" color="gray"
                    onPress={() => setShowCal(true)} />
                  </View>
                </View>

                <View>
                  <Text style={styles.info}>지역</Text>
                  <LocationItem setLocation={setLocation} />
                </View>

                <View>
                  <Text style={styles.info}>인원 수</Text>
                  <TextInput
                    onChangeText={setCount}
                    value={count}
                    style={styles.input}
                    placeholder="  00명"
                    placeholderTextColor="grey"
                  />
                </View>

                <View>
                  <Text style={styles.info}>세부사항</Text>
                  <TextInput
                    onChangeText={setEtc}
                    value={etc}
                    style={styles.input}
                    placeholder="  내용을 입력 해 주세요"
                    placeholderTextColor="grey"
                  />
                </View>

              </View>

              <View style={buttonstyles.button}>
                <Button title="수정 완료"
                  onPress={() => {
                    const data = {
                      count: count, //인원 수
                      etc: etc, //세부사항
                      date: date, //날짜
                      ...location //지역
                    }
                    console.log(data);
                    navigation.navigate('MatchingDetail');
                  }}
                />
              </View>

            </View>
          </ScrollView>
      }
    </>
  )

}

export default MatchingModifyScreen;

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