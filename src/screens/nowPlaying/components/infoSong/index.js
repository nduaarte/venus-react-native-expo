import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function InfoSong() {
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../../images/imageTemp.jpeg')} />
      <View style={styles.descContainer}>
        <Text style={styles.musicName}>Music Name</Text>
        <Text style={styles.autorName}>Autor Name</Text>
      </View>
    </View>
  );
}
