import React from 'react'
import { TextInput } from 'react-native'

const CustomTextInput = () => {
  return (
    <TextInput
      className="bg-gray-300 rounded-lg py-2 px-3 text-red-500 text-xs"
      placeholder='halo'
      keyboardType='numeric'
       />
  )
}

export default CustomTextInput