import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import { Image, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';
import { ImageAssets } from '../../../assets/imageAssets';
import { routeHome } from '../../utils/values/routeNames';

const SplashScreen = () => {
    const navigate = useNavigation();
    const [isMandatoryUpdate,setMandatoryUpdate] = useState(false);
    const [progressDownload,setProgressDownload] = useState(0);

    useEffect(() => {
        navigate.setOptions({
            headerShown: false,
        });
        CodePush.checkForUpdate()
        .then(update => {
          if(update){
            if(update.isMandatory){
              setMandatoryUpdate(true);
              CodePush.sync({
                installMode: CodePush.InstallMode.IMMEDIATE,
              },
              (status) => {
                switch (status) {
                  case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                    console.log("Checking for updates.");
                    break;
                  case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    console.log("Downloading package.");
                    break;
                  case CodePush.SyncStatus.INSTALLING_UPDATE:
                    console.log("Installing update.");
                    break;
                  case CodePush.SyncStatus.UP_TO_DATE:
                    console.log("Up-to-date.");
                    break;
                  case CodePush.SyncStatus.UPDATE_INSTALLED:
                    console.log("Update installed.");
                    break;
                }
              },
              ({ receivedBytes, totalBytes, }) => {
                  setProgressDownload(totalBytes / receivedBytes);
                  console.log('progress download',totalBytes / receivedBytes);
                  console.log(receivedBytes + " of " + totalBytes + " received.");
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
        {isMandatoryUpdate && (
          <>
            <Text className="font-PlusJakartaSans-Medium text-sm text-white pb-2">
              Updating Features
            </Text>
            <Progress.Bar 
              color='white'
              progress={progressDownload}
            width={240} />
          </>
        )}

    </View>
  )
}

export default SplashScreen