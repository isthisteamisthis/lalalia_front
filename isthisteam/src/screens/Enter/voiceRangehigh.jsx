import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function VoiceRange({navigation}) {
  const [recordTime, setRecordTime] = useState('00:00');
  const [recordedFilePath, setRecordedFilePath] = useState(null);

  const onPress = () => {
    navigation.navigate('Mainpage');
  };

  const onStartRecord = async () => {
    try {
      await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(e => {
        setRecordTime(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setRecordedFilePath(result);
      console.log('파일경로:', result);
    } catch (error) {
      console.error(error);
    }
  };

  const sendFileToServer = async () => {
    if (recordedFilePath) {
      try {
        // const apiUrl = 'http://10.0.2.2:8080/api/perfect-scores';
        const apiUrl = 'http://192.168.0.109:8080/api/min-voice-range';

        const formData = new FormData();
        formData.append('voice-range', {
          uri: 'file://' + recordedFilePath,
          name: 'test.wav',
          type: 'audio/wav',
        });

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        if (response.ok) {
          console.log('성공!');
        } else {
          console.error('실패');
        }
      } catch (error) {
        console.error('에러: ', error);
      }
    } else {
      console.log('음원 파일 없음');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>{`높은 음의
음역대 측정을
진행하겠습니다`}</Text>
      <Text style={styles.title01}>{recordTime}</Text>
      <Text
        style={
          styles.title00
        }>{`본인이 낼 수 있는 가장 높은 음을 내주세요`}</Text>
      <Button title="  녹음 시작  " onPress={() => onStartRecord()}></Button>
      <Button title="  녹음 완료  " onPress={() => onStopRecord()}></Button>
      <Button
        title="      전송      "
        onPress={() => sendFileToServer()}></Button>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button02}
        onPress={onPress}>
        <Text style={styles.text01}>입장하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4', // 페이지 배경색 변경
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginTop: -20,
    letterSpacing: -0.7,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 28,
    alignContent: 'center',
  },
  title00: {
    fontSize: 14,
    letterSpacing: -0.9,
    textAlign: 'center',
    marginBottom: 40,
  },
  title01: {
    fontSize: 30,
    letterSpacing: -0.5,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 16,
  },
  recordTime: {
    fontSize: 18,
    marginBottom: 16,
  },
  button02: {
    marginTop: 40,
    paddingTop: -7,
    width: 100,
    height: 30,
    textAlign: 'center',
    marginLeft: 3,
    borderRadius: 7,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
  },
  text01: {
    marginTop: 2,
    color: 'black',
    fontWeight: '800',
    letterSpacing: -1,
  },
});
