import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';

import { Image, View } from 'react-native';
import CodePush from 'react-native-code-push';
import { ImageAssets } from '../../../assets/imageAssets';
import { routeHome, routeLogin } from '../../utils/values/routeNames';

const SplashScreen = () => {
    const navigate = useNavigation();
    const [totalBytes,setTotalBytes] = useState(0);
    const [receivedBytes, setReceivedBytes] = useState(0);
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
                setTotalBytes(totalBytes);
                setReceivedBytes(receivedBytes);
            })
            }else{
                CodePush.sync({
                    installMode: CodePush.InstallMode.ON_NEXT_RESUME,
                });
                setTimeout(() => {
                    navigate.replace(routeLogin);
                }, 500);
            }
          }else{
            setTimeout(() => {
                navigate.replace(routeLogin);
            }, 500);
          }
        })
        .catch(e => {
            setTimeout(() => {
                navigate.replace(routeLogin);
            }, 500);
        })
    },[]);
  return (
    <View className="min-h-screen bg-primary flex justify-center items-center">
        <Image source={ImageAssets.logo} className="w-3/4 h-2/4" />
    </View>
  )
}

export default SplashScreen