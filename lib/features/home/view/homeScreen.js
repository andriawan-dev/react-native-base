import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import MediaPlayer from '../../../utils/components/mediaPlayer';

const HomeScreen = () => {
  
 return (
  <ScrollView
    StickyHeaderComponent={0}>
    <MediaPlayer 
      source={'https://ember-test.sgp1.cdn.digitaloceanspaces.com/videos/cumi-saus-padang/playlist.m3u8'} />
  </ScrollView>
 )
};

export default HomeScreen