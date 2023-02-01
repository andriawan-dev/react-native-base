import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CustomModal from './customModal'

const DialogUpdate = ({
    modalVisible,
    setModalVisible,
}) => {
    const listUpdate = [
        'Splash screen',
        'UI login',
        'UI register',
        'Login Facebook',
        'Login Google',
        'Dynamic Update Codepush',
        'Custom Dialog',
        'Custom Button',
        // 'Install font sans jakarta'
    ];
  return (
    <CustomModal
    title={"What's new v0.0.1"}
    message="31 Januari 2023"
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    content={
      <ScrollView>
        {listUpdate.map((update,index) => (
          <View key={index + 1}>
             <ItemUpdate
              no={index + 1}
              message={update}
              />
          </View>
        ))}
      </ScrollView>
    } />
  )
}

const ItemUpdate = ({
    no,
    message,
}) =>{
    return (
        <View className="flex flex-row mb-2">
          <View className="w-6">
            <Text className="text-center font-PlusJakartaSans-Medium text-sm text-black-70">
              {no}.
            </Text>
          </View>
          <View className="flex-1">
            <Text className="font-PlusJakartaSans-Medium text-sm text-black-70">
              {message}
            </Text>
          </View>
        </View>
    );
}

export default DialogUpdate