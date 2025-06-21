// app/navigation/AppNavigator.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../index'; // or wherever your HomeScreen is
import SignUpScreen from '../SignUp'
import ClientSignUpScreen from '../ClientSignUp';

// ✅ Define the navigation types
export type RootStackParamList = {
  Home: { role?: 'artist' | 'client' };
  SignUp: undefined;
  ClientSignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// ✅ Navigation container wrapped properly
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ClientSignUp" component={ClientSignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
