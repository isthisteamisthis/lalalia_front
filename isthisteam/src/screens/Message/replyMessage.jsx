import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ReplyMessage = ({route, navigation}) => {
  const {originalMessage} = route.params;
  const [replyMessage, setReplyMessage] = useState('');

  //   <TouchableOpacity onPress={MoreButtonPress}>
  //   <Text style={styles.moreButton}>더보기</Text>
  // </TouchableOpacity>

  const handleSendReply = () => {
    // 여기에서 replyMessage를 이용하여 답장 쪽지를 작성 및 전송하는 로직을 추가하세요.
    // 작성한 쪽지를 서버에 전송하거나 다른 처리를 수행할 수 있습니다.
    // 이 예시에서는 단순히 replyMessage를 콘솔에 출력합니다.
    console.log('작성한 답장 내용:', replyMessage);

    // 답장을 작성하고 나면 이전 화면으로 돌아갑니다.
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../android/app/assets/images/paper.png')} // 이미지 경로를 설정합니다.
        style={styles.header}
      />
      <View style={styles.messageContainer}>
        <Text style={styles.senderName}>
          보낸 사람 | {originalMessage.sender}
        </Text>
        <Text style={styles.subject}>{originalMessage.subject}</Text>
        <Text style={styles.date}>{originalMessage.date}</Text>
        <Text style={styles.messageText}>{originalMessage.message}</Text>
      </View>
      <TextInput
        style={styles.replyInput}
        placeholder="답장을 작성하세요..."
        multiline={true}
        value={replyMessage}
        onChangeText={text => setReplyMessage(text)}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendReply}>
        <Text style={styles.sendButtonText}>전송</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#Fff',
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 170,
  },
  messageContainer: {
    padding: 16,
    borderWidth: 3,
    borderColor: '#FFCBB3',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subject: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    letterSpacing: -1,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },
  replyInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
    backgroundColor: 'white',
    minHeight: 100,
  },
  sendButton: {
    backgroundColor: '#0067FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReplyMessage;