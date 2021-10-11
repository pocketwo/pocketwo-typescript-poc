import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingScreen from '../landing';
import {LoginScreen, RegisterScreen} from '../signin';
import {default as OnboardingNavigator} from '../onboarding';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  Onboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Onboard" component={OnboardingNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
