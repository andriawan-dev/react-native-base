import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './lib/app/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routeHome } from './lib/utils/values/routeNames';
import HomeScreen from './lib/features/home/view/homeScreen';
import { useColorScheme } from 'nativewind';
import { getTokenFCM, notifOpenAppFromBackground, notifOpenAppFromTerminate } from './lib/utils/helpers/firebaseMessaging';
import CodePush from 'react-native-code-push';
const App = () => {
  const Stack = createNativeStackNavigator();
  const { colorScheme, setColorScheme } = useColorScheme();
  useEffect(() => {
    setColorScheme('light');
    getTokenFCM(); 
    notifOpenAppFromBackground();
    notifOpenAppFromTerminate();
    CodePush.checkForUpdate()
    .then(update => {
      if(update){
        if(update.isMandatory){
          
        }
      }
    })
    // CodePush.sync({

    // });
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routeHome}>
          <Stack.Screen name={routeHome} component={HomeScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default CodePush(App)