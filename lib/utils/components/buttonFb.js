import React from 'react'
import { TouchableOpacity, View,Text } from 'react-native'
import { IconFb } from '../../../assets/iconAssets'

const ButtonFb = ({
    onPress,
}) => {
  return (
    <TouchableOpacity
        className="flex-1"
        activeOpacity={0.7}
        onPress={onPress}>
        <View className="h-[52px] bg-[#1877F2] rounded-lg flex flex-row justify-center items-center">
            <IconFb />
            <View className="w-3" />
            <Text className="font-PlusJakartaSans-Medium text-white text-sm">
                Facebook
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonFb