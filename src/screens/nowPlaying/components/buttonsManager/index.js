import React,{ Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av'

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class ButtonsManager extends Component {
  async componentDidAmount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });

    this.sound = new Audio.Sound();

    const status = {
      shouldPlay: false
    };

    this.sound.loadAsync(require('../../../../musics/luxuria.mp3'), status, false);
  }


  playSound() {
    this.sound.playAsync();
  }

  render() { 
    return(
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon style={styles.icon} size={35} name='ios-skip-backward'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={this.playSound.bind(this)}>
          <Icon style={styles.icon} size={50} name='ios-pause' />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon style={styles.icon} size={35} name='ios-skip-forward'/>
        </TouchableOpacity>
      </View>
    );
  }
}
