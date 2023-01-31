import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './lib/app/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routeHome, routeLogin, routeRegister, routeSplash } from './lib/utils/values/routeNames';
import HomeScreen from './lib/features/home/view/homeScreen';
import { useColorScheme } from 'nativewind';
import { getTokenFCM, notifOpenAppFromBackground, notifOpenAppFromTerminate } from './lib/utils/helpers/firebaseMessaging';
import CodePush from 'react-native-code-push';
import SplashScreen from './lib/features/main/splashScreen';
import LoginPage from './lib/features/auth/view/login/loginPage';
import RegisterPage from './lib/features/auth/view/register/registerPage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const App = () => {
  const Stack = createNativeStackNavigator();
  const { colorScheme, setColorScheme } = useColorScheme();
  useEffect(() => {
    setColorScheme('light');
    getTokenFCM(); 
    notifOpenAppFromBackground();
    notifOpenAppFromTerminate();
    GoogleSignin.configure({
      webClientId: '860872797752-pl23rlh2h9pj20m6t0nb5abmthiicbcd.apps.googleusercontent.com',
    });
    // CodePush.sync({

    // });
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routeSplash}>
          <Stack.Screen name={routeHome} component={HomeScreen}  />
          <Stack.Screen name={routeSplash} component={SplashScreen} />
          {/* Auth */}
          <Stack.Screen name={routeLogin} component={LoginPage} />
          <Stack.Screen name={routeRegister} component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default CodePush(App)