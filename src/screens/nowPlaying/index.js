import React from 'react';
import { View } from 'react-native';

import Header from './components/header';
import InfoSong from './components/infoSong';
import PlayBar from './components/playBar';
import ButtonsManager from './components/buttonsManager';

export default function NowPlaying() {
  return(
    <View style={{flex: 1, backgroundColor: '#0f0f0f'}}>
      <Header />
      <InfoSong />
      <PlayBar />
      <ButtonsManager />
    </View>
  );
}
