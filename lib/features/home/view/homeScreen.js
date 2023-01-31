import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions, Alert, Modal } from 'react-native';
import CustomButton from '../../../utils/components/customButton';
import CustomModal from '../../../utils/components/customModal';
import DialogUpdate from '../../../utils/components/dialogUpdate';
import MediaPlayer from '../../../utils/components/mediaPlayer';
import { routeLogin } from '../../../utils/values/routeNames';

const HomeScreen = () => {
  const navigate = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const windowHeight = useWindowDimensions().height;
  // useEffect(() => {
  //   // Alert.prompt(
  //   //   'test',
  //   //   'waw',
  //   // );
  // },[]);

 return (
  <View
    style={{
      minHeight: windowHeight,
    }}
    className="flex justify-center items-center">
      <DialogUpdate
        modalVisible={modalVisible}
        setModalVisible={setModalVisible} />
       <CustomButton
        size='l'
        onPress={() => {
          setModalVisible(true);
        }}
        label={'v0.0.1'} />
      <View className="h-4" />
      <CustomButton
        size='l'
        onPress={() => {
          navigate.navigate(routeLogin);
        }}
        label={'Login'} />
  </View>
 )
};

export default HomeScreen