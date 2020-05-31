import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function Header() {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name='ios-arrow-down' size={28} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.textPlaylistName}>playlistName</Text>
      
      <TouchableOpacity>
        <Icon name='ios-menu' size={28} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
