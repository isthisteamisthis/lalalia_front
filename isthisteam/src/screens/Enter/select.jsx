import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Select({navigation}) {
  const onPress = () => {
    navigation.navigate('VoiceRange');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`당신의 유형을 
 선택해주세요`}
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>작곡가</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>가수</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '100',
    letterSpacing: -0.5,
    marginTop: -40,
    marginBottom: 0,
    lineHeight: 22,
    color: 'black',
  },
  button: {
    marginTop: 5,
    paddingTop: -7,
    width: 200,
    height: 52,
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 'auto',
  },
  text: {
    color: 'black',
    marginTop: 2.5,
    fontSize: 28,
    letterSpacing: -1,
    fontWeight: '600',
  },
});

export default Select;
