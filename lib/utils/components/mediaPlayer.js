import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import Video from 'react-native-video';

const MediaPlayer = ({
    source,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleSeek = value => {
    console.log('handle seek',value);
    videoRef.seek(Math.floor(value));
  };

  const handleProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const handleLoad = data => {
    console.log('onLoad video: ',data);
    setDuration(data.duration);
  };

  return (
    <View className="aspect-video">
      <Video
        ref={ref => {
          videoRef = ref;
        }}
        volume={1}
        className="w-full h-full"
        source={{ uri: source }}
        style={styles.video}
        onProgress={handleProgress}
        onLoad={handleLoad}
        onError={error => console.log(error)}
        onBuffer={buffer => console.log(buffer)}
      />
      <View style={styles.sliderContainer}>
        <Slider
       
          maximumValue={duration}
          value={currentTime}
          onValueChange={handleSeek}
          
        />
        <Text style={styles.sliderText}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Text>
      </View>
    </View>
  );
};

const formatTime = time => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  sliderContainer: {
    width: '100%',
 
    marginTop: 30,
  },
  slider: {
    width: '90%',
  },
  sliderText: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default MediaPlayer