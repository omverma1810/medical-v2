import React from 'react';
import {  StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OpenScreen from './OpenScreen';
import HomeScreen from './HomeScreen';
import Register from './Register';
import Result from './Result';
import Login from './Login';
import ForgetPass from './ForgetPass';
import OTP from './OTP'
import NewPass from './NewPass'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: '#2151A0',
      elevation:0,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      paddingLeft:20
    },
  });
const LoginStack = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="OpenScreen" component={OpenScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Result" component={Result}/>
      <Stack.Screen name="ForgetStack" component={ForgetStack} options={{ headerShown: false }}/>         
    </Stack.Navigator>
  );
};
const ForgetStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ForgetPass" component={ForgetPass} options={{ headerShown: false }}/>
        <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }}/>
        <Stack.Screen name="NewPass" component={NewPass} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
  };
const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{
            title: 'Medical Image Diagnosis',
            headerLeft: null,
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }} />
        <Stack.Screen name="Result" component={Result} 
        options={{
            title: 'Result',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}/>
      </Stack.Navigator>
    );
  };
const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="OpenScreen">
        <Stack.Screen name="OpenScreen" component={LoginStack} options={{ headerShown: false }} />
        <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }}  />
        <Stack.Screen name="ForgetStack" component={ForgetStack} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
