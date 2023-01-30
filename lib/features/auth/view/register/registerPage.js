import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View,Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import { IconArrowLeft } from '../../../../../assets/iconAssets';
import { ImageAssets } from '../../../../../assets/imageAssets';
import CustomButton from '../../../../utils/components/customButton';
import CustomTextInput from '../../../../utils/components/customTextInput';

const RegisterPage = () => {
    const navigate = useNavigation();
    useEffect(() => {
        navigate.setOptions({
            headerShown: false,
        });
    },[]);
  return (
    <SafeAreaView>
        <ScrollView>
            <View className="min-h-screen bg-white px-4">
                <Image
                className="absolute right-0 top-0 w-32"
                source={ImageAssets.foodRegister} />
                <TouchableOpacity 
                    onPress={() => {
                        navigate.goBack();
                    }}
                    className="h-14 flex justify-center mb-7">
                    <IconArrowLeft />
                </TouchableOpacity>
               
                <Text className="font-PlusJakartaSans-Bold text-black text-3xl">
                    Daftar
                </Text>
                <View className="h-4" />
                <Text className="font-PlusJakartaSans text-black-60">
                Lorem ipsum dolor sit amet, consectetur adip
                    iscing elit Phasellus aliquet porttitor
                </Text>
                <View className="h-6" />
                <CustomTextInput
                    label={'Email'}
                    placeholder={'Masukkan email kamu'}
                    />
                <View className="h-4" />
                <CustomTextInput
                    label={'Nama Pengguna'}
                    placeholder={'Masukkan nama pengguna'}
                    />
                <View className="h-4" />
                <CustomTextInput
                    label={'Kata Sandi'}
                    placeholder={'Masukkan kata sandi'}
                    />
                <View className="h-4" />
                <CustomTextInput
                    label={'Konfirmasi kata sandi'}
                    placeholder={'Masukkan ulang kata sandi'}
                    />
                <View className="h-4" />
                <CustomButton
                    label={'Masuk'} />
                <View className="h-4" />
                <View className="flex flex-row justify-center bg-white">
                    <Text className="font-PlusJakartaSans-Medium text-xs text-black">
                            Udah punya akun?
                        </Text>
                    <TouchableOpacity 
                        onPress={() => {
                            navigate.goBack();
                        }}
                        className="flex flex-row pl-1">
                        <Text className="font-PlusJakartaSans-Bold text-xs text-primary">
                            Masuk aja!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    
    </SafeAreaView>
  )
}

export default RegisterPage