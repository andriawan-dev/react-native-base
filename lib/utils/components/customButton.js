import clsx from 'clsx';
import React from 'react'
import { Button,  Text,  TouchableOpacity, View } from 'react-native'

const CustomButton = ({
  label,
  size = 'xxl',
  onPress,
}) => {
  let className = '';
  let textClass = '';
  switch(size){
    case 'xxl':
      className = 'h-[56px] px-4 rounded-[8px]';
      textClass = 'text-[16px]';
      break;
    case 'xl':
      className = 'h-[52px] px-4 rounded-[7.5px]';
      textClass = 'text-[15px]';
      break;
    case 'l':
      className = 'h-[48px] px-4 rounded-[7px]';
      textClass = 'text-[14px]';
      break;
    case 'll':
      className = 'h-[44px] px-4 rounded-[6.5px]';
      textClass = 'text-[13px]';
      break;
    case 'm':
      className = 'h-[40px] px-4 rounded-[6px]';
      textClass = 'text-[12px]';
      break;
    case 'mm':
      className = 'h-[36px] px-4 rounded-[5.5px]';
      textClass = 'text-[11px]';
      break;
    case 's':
      className = 'h-[32px] px-4 rounded-[5px]';
      textClass = 'text-[10px]';
      break;
    case 'ss':
      className = 'h-[28px] px-4 rounded-[4.5px]';
      textClass = 'text-[9px]';
      break;
  }

  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress}
      >
      <View className={clsx('bg-primary flex justify-center items-center',className)}>
        <Text className={clsx('font-PlusJakartaSans-Bold text-white',textClass)}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton