import clsx from 'clsx';
import React from 'react'
import { Modal, Platform, Pressable, View,Text, useWindowDimensions } from 'react-native';
import CustomButton from './customButton';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    title,
    message,
    content,
}) => {
    const height = useWindowDimensions().height * 0.6;
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}
    >
        <Pressable
            onPress={() => setModalVisible(false)}
            className={clsx("absolute inset-0",{
                'bg-[#232f34]/30': Platform.OS == 'android',
                'bg-white/30': Platform.OS == 'ios',
            })} />
        <View className="flex-1 justify-center items-center">
            <View 
                style={{
                    maxHeight: height,
                }}
                className={clsx("bg-white p-4 rounded-lg shadow-2xl",{
                'max-w-[270] w-full': Platform.OS == 'ios',
                'max-w-[280] w-full': Platform.OS == 'android',
            })}>
            {title && (
                <Text className="font-PlusJakartaSans-Bold text-black pb-2 text-center">
                    {title}
                </Text>
            )}
            {message && (
                <Text className="font-PlusJakartaSans text-black-50 pb-2 text-center">
                    {message}
                </Text>
            )}
            {content && content}
            <CustomButton
                onPress={() => setModalVisible(false)}
                size='m'
                label={'Oke'} />
               
            </View>
        </View>
    </Modal>
  )
}

export default CustomModal