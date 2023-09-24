import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const SongDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper1.png')}
          style={styles.header}
        />
        <Text style={styles.sendtext1}>나의 쪽지함</Text>
      </View>
      <View style={styles.header00}>
        <Image
          style={styles.albumCover}
          source={{uri: 'https://example.com/album-cover.jpg'}}
        />
        <View style={styles.albumInfo}>
          <Text style={styles.albumTitle}>제목</Text>
          <Text style={styles.artistName}>아티스트 이름</Text>
          <Text style={styles.releaseDate}>발매일: 2023-09-22</Text>
        </View>
      </View>
      {/* <View
        style={{
          flex: 1,
          backgroundColor: '#313131',
          justifyContent: 'center',
        }}>
        <AudioPlayer
          url={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 205,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '800',
  },
  container1: {
    marginTop: -10,
    backgroundColor: '#EAEAF4',
    width: 800,
    marginLeft: -40,
    height: 100,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 225,
    width: 25,
    height: 25,
  },
  header00: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  albumCover: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
    marginTop: 50,
    marginLeft: 50,
  },
  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistName: {
    fontSize: 18,
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SongDetail;
