import React, { useEffect } from 'react'
import { View,Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../../utils/components/customTextInput';

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

      <Text>Halo</Text>
    </View>
    </ScrollView>
  )
}

export default HomeScreen