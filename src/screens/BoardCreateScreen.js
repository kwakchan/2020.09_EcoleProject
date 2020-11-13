import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';

const BoardCreateScreen = ({ navigation }) => {

    const [boardtitle, setBoardTitle] = useState('');
    const [boardcontents, setBoardContents] = useState('');
    const [kind, setKind] = useState('');


    // const [image, setImage] = useState(null);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         setImage(result.uri);
    //     }
    // };


    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, textAlign: "center" }}>게시글 개설</Text>
                </View>
                <View style={styles.container}>
                    <Picker
                        style={[styles.picker]} //스타일 지정
                        selectedValue={kind} //제일 위 선택란에 누른 아이템이 표시된다
                        onValueChange={(itemValue, itemIndex) => {
                            setKind({ itemValue })
                        }}                        //value가 바뀌면 상태를 변경해준다 
                    >
                    
                    <Picker.Item label="자유 게시판" value="" />
                    <Picker.Item label="용병 구하기" value="1" />
                    <Picker.Item label="용병 찾기" value="2" />
                    

                    </Picker>

                    

                    {/* <View>
                        <Text style={styles.info}>팀 로고</Text>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                    </View>
                    <View style={styles.button1}>
                        <Button
                            title="찾아보기"
                            onPress={pickImage}

                        />
                    </View> */}

                    <View>
                        <TextInput
                            onChangeText={setBoardTitle}
                            value={boardtitle}
                            style={styles.input}
                            placeholder="  제목을 입력하세요 "
                            placeholderTextColor="grey"
                        />
                    </View>

                    {/* <View>
                        <Text style={styles.info}>지역</Text>

                        <LocationItem setLocation={(location) => console.log(location)} />

                    </View> */}

                    <View>
                        <TextInput
                            onChangeText={setBoardContents}
                            value={boardcontents}
                            style={styles.inputcontents}
                            placeholder="  내용을 입력 해 주세요"
                            placeholderTextColor="grey"
                            multiline={true}

                        />
                    </View>
                </View>

                <View style={buttonstyles.button}>
                    <Button title="게시글 올리기"
                        onPress={() => {
                            const boarddata = {
                                boardtitle: boardtitle,
                                boardcontents: boardcontents,
                                // image: image
                            }
                            console.log(boarddata);
                            navigation.navigate('MyPage');
                        }}
                    />
                </View>
            </View>
        </ScrollView>

    )

}

export default BoardCreateScreen;

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
    },
    inputcontents: {
        margin: 7,
        width: '95%',
        height: 400,
        alignSelf: 'center',
        borderColor: "grey",
        borderWidth: 0.8,
        textAlignVertical: 'top'
    },
    // image: {
    //     margin: 10,
    //     height: 160,
    //     width: 160,
    //     borderWidth: 0.5,
    //     borderColor: "black"

    // }

})

const buttonstyles = StyleSheet.create({
    button: {
        margin: 30,
        width: '50%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
})