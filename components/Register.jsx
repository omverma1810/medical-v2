import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://ml-models-2.onrender.com/signup', {
                username: username,
                phonenumber: phoneNumber,
                password: password,
                confirm_password: confirmPassword
            });
            console.log(response.data);
            if (response.status === 200) {
                await AsyncStorage.setItem('isLoggedIn', 'true');
                navigation.navigate('HomeStack');
            } else {
                // Handle error response from backend
                console.error('Registration failed:', response.data);
                // You can display an error message to the user or handle the error in any other way
            }
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle network error
        }
    };

    return (
        <View style={{ backgroundColor: '#2151A0', height: '100%', display: 'flex' }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 60 }}>
                <View>
                    <Image source={require('../assets/person2.png')} style={{ height: 200, width: 200 }} />
                </View>
                <View style={{ paddingHorizontal: 30, gap: 20, width: '100%' }}>
                    <Text style={{ color: 'white', textAlign: 'flex-start', fontSize: 20, fontWeight: 700 }}>Register Here</Text>
                    <View style={[{ paddingHorizontal: 10, gap: 10 }]}>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}> Username</Text>
                            <TextInput
                                style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                                placeholder='Enter  Username'
                                value={username}
                                onChangeText={text => setUsername(text)}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>Phone Number </Text>
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
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>Confirm Password</Text>
                            <TextInput
                                style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                                secureTextEntry
                            />
                        </View>
                    </View>

                </View>
                <View style={{ gap: 30 }}>
                    <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: "#174c70", height: 43, width: 301, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Text style={{ color: "white", fontSize: 15, fontWeight: 600 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Register;
