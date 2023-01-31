import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions, Alert, Modal } from 'react-native';
import CustomButton from '../../../utils/components/customButton';
import CustomModal from '../../../utils/components/customModal';
import MediaPlayer from '../../../utils/components/mediaPlayer';
import { routeLogin } from '../../../utils/values/routeNames';

const HomeScreen = () => {
  const navigate = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
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
      <CustomModal
        title={"What's new"}
        message={'Halo gais'}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible} />
      <Text className="font-PlusJakartaSans-Medium mb-4">
        v0.0.1
      </Text>
    
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