import React from 'react'
import { TouchableOpacity, View,Text, Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { IconGoogle } from '../../../assets/iconAssets'

const ButtonGoogle = ({
    onPress,
}) => {
  return (
    <TouchableOpacity
        className="flex-1"
        activeOpacity={0.7}
        onPress={onPress}>
        <View className="h-[52px] border-[1px] border-black-30 flex flex-row justify-center items-center rounded-lg">
            <IconGoogle />
            <View className="w-3" />
            <Text className="font-PlusJakartaSans-Medium text-black-60 text-sm">
                Google
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonGoogle