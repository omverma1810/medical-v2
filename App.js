import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
import Register from './components/Register';
import Sample from './components/Sample'
import Navigation from './components/Navigation'
import ForgetPass from './components/ForgetPass';
import OTP from './components/OTP'
import NewPass from './components/NewPass'

export default function App() {
  return (
    
    
    <View style={{flex:1}}>
      <Navigation/>
      <StatusBar/>
    </View>
  );
}
