import React, { useEffect } from 'react'
import { View,Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../../utils/components/customTextInput';
import Video from 'react-native-video';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Keren',
      
    });
  },[navigation]);

  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
  
  return (
    <ScrollView>
      <View className='flex flex-col flex-1 '>
      <Video source={{
        uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}   // Can be a URL or a local file.
      //  ref={(ref) => {
      //    this.player = ref
      //  }}    
        className="aspect-video"                                  // Store reference
       onBuffer={(data) => {
        console.log('buffer',data);
       }}                // Callback when remote video is buffering
       onError={(e) => {
        console.log('error',e);
       }}      
                // Callback when video cannot be loaded
      //  style={styles.backgroundVideo} 
       />
       <VLCPlayer
        className="aspect-video"
        onError={(e) => {
          console.log('error',e);
        }}
        onBuffering={(b) => {
          console.log('buffering');
        }}
        onProgress={(_) => {
          //console.log('onProgress');
        }}
        source={{
          initType: 2,
          hwDecoderEnabled: 1,
          hwDecoderForced: 1,
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
        autoplay={true}
        autoAspectRatio={true}
        resizeMode="cover" 
        // videoAspectRatio={"4:3"}
        isLive={true}
        autoReloadLive={true}
         />
      <Text>Halo gaes aku adalah</Text>
    </View>
    </ScrollView>
  )
}

export default HomeScreen