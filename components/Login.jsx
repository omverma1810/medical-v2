import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://ml-models-2.onrender.com/login', {
                phonenumber: phoneNumber, // Assuming the username is the phone number for login
                password: password
            });
            console.log(response.data); // Log the response from the server
            // Navigate to the HomeStack screen upon successful login
            navigation.navigate('HomeStack');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <View style={{ backgroundColor: '#2151A0', height: '100%', display: 'flex' }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 60 }}>
                <View>
                    <Image source={require('../assets/person2.png')} style={{ height: 200, width: 200 }} />
                </View>
                <View style={{ paddingHorizontal: 30, gap: 20, width: '100%' }}>
                    <Text style={{ color: 'white', textAlign: 'flex-start', fontSize: 20, fontWeight: 700 }}>Login Here</Text>
                    <View style={{ paddingHorizontal: 10, gap: 10 }}>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>Phone Number</Text>
                            <TextInput
                                style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                                placeholder='Enter Phone Number'
                                value={phoneNumber}
                                onChangeText={text => setPhoneNumber(text)}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>Password</Text>
                            <TextInput
                                style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                                placeholder='Enter Password'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry
                            />
                        </View>
                    </View>

                </View>
                <View style={{ gap: 30 }}>
                    <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#174c70", height: 43, width: 301, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Text style={{ color: "white", fontSize: 15, fontWeight: 600 }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetStack')}>
                            <Text style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-end', color: 'white' }}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', marginTop: 20, display: 'flex', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ color: 'white' }}>
                                New User? Sign UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Login;
