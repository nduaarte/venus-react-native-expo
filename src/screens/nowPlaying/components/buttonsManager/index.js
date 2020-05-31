import React,{ useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function ButtonsManager() {

  const [on, setOn] = useState(false);
  
  useEffect(() => {
    if(on == true) {
      
    }
  }, [])

  function toggle() {
    setOn(!on);
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon style={styles.icon} size={35} name='ios-skip-backward'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => toggle()}>
        <Icon style={styles.icon} size={50} name={on ? 'ios-play' : 'ios-pause'} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon style={styles.icon} size={35} name='ios-skip-forward'/>
      </TouchableOpacity>
    </View>
  );
}
