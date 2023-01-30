import React from 'react'
import { Text, TextInput, View } from 'react-native'

const CustomTextInput = ({
  label,
  value,
  placeholder,
}) => {
  return (
    <View>
      <Text className="font-PlusJakartaSans-SemiBold text-sm mb-2">
        {label}
      </Text>
      <TextInput
        className="bg-black-10 rounded-lg py-3 px-4 text-black-30 text-sm font-PlusJakartaSans"
        placeholderTextColor={'#C7CBD4'}
        placeholder={placeholder}
        />
    </View>

  )
}

export default CustomTextInput