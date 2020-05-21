import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './navigation';
import * as AuthScreens from './screens/auth';

export default function App() {
  const renderAuthScreens = () => {
    const Stack = createStackNavigator<AuthStackParamList>();

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={AuthScreens.WelcomeScreen} />
          <Stack.Screen name="Login" component={AuthScreens.LoginScreen} />
          <Stack.Screen name="Signup" component={AuthScreens.SignupScreen} />
          <Stack.Screen name="ForgotPassword" component={AuthScreens.ForgotPasswordScreen} />
        </Stack.Navigator>
      </React.Fragment>
    );
  };

  return <NavigationContainer>{renderAuthScreens()}</NavigationContainer>;
}
