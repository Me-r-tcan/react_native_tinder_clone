import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const TinderCard = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.bio}>
            A dude with a rocket is looking for a gal with fuel
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.38,
    shadowRadius: 6.62,
    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default TinderCard;
