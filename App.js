import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  TransitionPresets } from '@react-navigation/stack';

import NowPlaying from './src/screens/nowPlaying';
import SongList from './src/screens/songList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SongList'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen 
          name='NowPlaying' 
          component={NowPlaying}
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
            gestureDirection: 'vertical'
          }} 
        />
        <Stack.Screen 
          name='SongList' 
          component={SongList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

