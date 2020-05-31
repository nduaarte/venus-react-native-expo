import React from 'react';
import { View } from 'react-native';
import Slider from 'react-native-slider';

import styles from './styles';

export default function PlayBar() {
  return(
    <View style={styles.container}>
      <Slider 
        style={styles.slider}
        maximumValue={100}
        minimumValue={10}
        minimumTrackTintColor={'white'}
        thumbTintColor={'white'}
        thumbStyle={styles.thumb}
      />
    </View>
  );
}
