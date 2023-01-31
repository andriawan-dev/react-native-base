import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import { Image, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';
import { ImageAssets } from '../../../assets/imageAssets';
import { routeHome } from '../../utils/values/routeNames';

const SplashScreen = () => {
    const navigate = useNavigation();
    const [progressDownload,setProgressDownload] = useState(0);
    useEffect(() => {
        navigate.setOptions({
            headerShown: false,
        });
        CodePush.checkForUpdate()
        .then(update => {
          if(update){
            if(update.isMandatory){
              CodePush.sync({
                installMode: CodePush.InstallMode.IMMEDIATE,
              },
              (status) => {
                switch (status) {
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                        console.log('DOWNLOADING PACKAGE');
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE:
                        console.log('INSTALLING UPDATE');
                        break;
                }
            },
            ({ receivedBytes, totalBytes, }) => {
                setProgressDownload(totalBytes / receivedBytes);
            })
            }else{
                CodePush.sync({
                    installMode: CodePush.InstallMode.ON_NEXT_RESUME,
                });
                setTimeout(() => {
                    navigate.replace(routeHome);
                }, 500);
            }
          }else{
            setTimeout(() => {
                navigate.replace(routeHome);
            }, 500);
          }
        })
        .catch(e => {
            setTimeout(() => {
                navigate.replace(routeHome);
            }, 500);
        })
    },[]);
  return (
    <View className="min-h-screen bg-primary flex justify-center items-center">
        <Image 
          source={ImageAssets.logoTextPutih} 
          className="" />
        <Text className="font-PlusJakartaSans-Medium text-sm text-white pb-2">
          Updating Features
        </Text>
        <Progress.Bar 
          color='white'
          progress={progressDownload}
        width={240} />
    </View>
  )
}

export default SplashScreen