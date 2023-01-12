import React, { useEffect } from 'react'
import { View,Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../../utils/components/customTextInput';
import { VLCPlayer } from 'react-native-vlc-media-player';

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Keren',
      
    });
  },[navigation]);
  
  return (
    <ScrollView>
      <View className='flex flex-col flex-1 '>
      <VLCPlayer
        source={{ 
          uri:
          'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
          initOptions: [
            '--no-audio',
            '--rtsp-tcp',
            '--network-caching=150',
            '--rtsp-caching=150',
            '--no-stats',
            '--tcp-caching=150',
            '--realrtsp-caching=150',
          ],
          
        }}
      />
      <Text>Halo</Text>
    </View>
    </ScrollView>
  )
}

export default HomeScreen