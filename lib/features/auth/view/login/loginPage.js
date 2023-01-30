import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View,Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import { IconArrowLeft } from '../../../../../assets/iconAssets';
import { ImageAssets } from '../../../../../assets/imageAssets';
import ButtonFb from '../../../../utils/components/buttonFb';
import ButtonGoogle from '../../../../utils/components/buttonGoogle';
import CustomButton from '../../../../utils/components/customButton';
import CustomTextInput from '../../../../utils/components/customTextInput';
import { routeRegister } from '../../../../utils/values/routeNames';

const LoginPage = () => {
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
                className="absolute right-0 top-0 w-40"
                source={ImageAssets.foodLogin} />
                <TouchableOpacity className="h-14 flex justify-center mb-7">
                    <IconArrowLeft />
                </TouchableOpacity>
               
                <Text className="font-PlusJakartaSans-Bold text-black text-3xl">
                    Masuk
                </Text>
                <View className="h-4" />
                <Text className="font-PlusJakartaSans text-black-60">
                Lorem ipsum dolor sit amet, consectetur adip
                    iscing elit Phasellus aliquet porttitor
                </Text>
                <View className="h-6" />
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
                <TouchableOpacity>
                    <Text className="font-PlusJakartaSans-SemiBold text-primary text-sm text-right">
                        Lupa kata sandi?
                    </Text>
                </TouchableOpacity>
                <View className="h-4" />
                <CustomButton
                    label={'Masuk'} />
                
                <View className="flex flex-row my-6 justify-center items-center">
                    <View className="w-12 h-[1px] bg-black-60" />
                    <Text className="mx-3 text-xs text-black-60">
                        Atau lanjutkan dengan
                    </Text>
                    <View className="w-12 h-[1px] bg-black-60" />
                </View>
                <View className="flex flex-row">
                    <ButtonGoogle
                        onpre />
                    <View className="w-3" />
                    <ButtonFb />
                </View>
                <View className="h-4" />
                <View className="flex flex-row justify-center bg-white">
                    <Text className="font-PlusJakartaSans-Medium text-xs text-black">
                            Belum Punya akun?
                        </Text>
                    <TouchableOpacity 
                        onPress={() => {
                            navigate.navigate(routeRegister);
                        }}
                        className="flex flex-row pl-1">
                        <Text className="font-PlusJakartaSans-Bold text-xs text-primary">
                            Daftar yuk!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
       
    </SafeAreaView>
  )
}

export default LoginPage