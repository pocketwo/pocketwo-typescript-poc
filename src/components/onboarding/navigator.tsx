import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalScreen from './personal';
import OneTimePassword from './onetimepassword';
import VerifyIdentity from './verifyidentity';

export type OnboardingStackParamList = {
  Personal: undefined;
  OneTimePassword: undefined;
  VerifyIdentity: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

export const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="Personal">
      <Stack.Screen name="Personal" component={PersonalScreen} />
      <Stack.Screen name="OneTimePassword" component={OneTimePassword} />
      <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} />
    </Stack.Navigator>
  );
};

export default Navigator;
