import { View, Text , Image , TouchableOpacity } from 'react-native'
import React from 'react'

const OpenScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#2151A0',height: '100%',display: 'flex',}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center' , flex:1 , gap:60}}>
            <View>
                <Image source={require('../assets/main.png')} style={{height: 200, width:200}} />
            </View>
            <View style={{paddingHorizontal:50, gap:5}}>
                <Text style={{color:'white' , textAlign:'flex-start' , fontSize:20 , fontWeight:700}}>Medical Image Diagnosis</Text>
                <Text style={{color:'white' , textAlign:'flex-start' , fontSize:15}}>Medicine heals the body, but compassion heals the soul.</Text>
            </View>
            <View style={{gap:30}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[{ backgroundColor: "#174c70" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                    <Text style={[{ color: "white" , fontSize: 15 , fontWeight:600 }]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[{ backgroundColor: "white" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                    <Text style={[{ color: "black" , fontSize: 15 , fontWeight:600 }]}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>
      
    </View>
  )
}

export default OpenScreen