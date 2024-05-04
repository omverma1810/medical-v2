import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Icons1 from '@expo/vector-icons/Feather'
import { Checkbox } from '@ant-design/react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    
    const deleteImage = () => {
        setImage(null);
        setShowDeleteIcon(false);
    };

    const handlePredict = async () => {
        try {
            const formData = new FormData();
            formData.append('file', {
                uri: image,
                name: 'file',
                type: 'image/*',
            });
            formData.append('option', selectedOption);
            const response = await axios.post(`https://ml-models-2.onrender.com/predict?option=${selectedOption}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (!response.status === 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = response.data;
            console.log(responseData);
            const res = responseData.prediction;
            const metrics = responseData.metrics;
            const option = responseData.option;
            navigation.navigate('Result', { res, metrics, option });
        } catch (error) {
            console.error('Error predicting:', error);
        }
    };

    const [checked, setChecked] = useState([]);

    const onChange = (checkedValues) => {
        setChecked(checkedValues);
    };
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('isLoggedIn');
            navigation.navigate('OpenScreen');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <View style={{ backgroundColor: '#2151A0', height: '100%', display: 'flex', }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 30, width: '100%' }}>
                <Text style={{ alignItems: 'flex-start', fontSize: 15, fontWeight: 600, color: 'white' }}>Upload Image Here</Text>
                <TouchableOpacity
                    onPress={pickImage}
                    style={{
                        height: 200,
                        width: 210,
                        backgroundColor: 'white',
                        borderRadius: 11,
                        position: 'relative',
                    }}
                >
                    {image ? (
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
                            <TouchableOpacity
                                onPress={deleteImage}
                                style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
                            >
                                <Icons1 name="trash-2" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Icons1 style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }} name="plus" size={32} color="#777777" />
                    )}
                </TouchableOpacity>

                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                    <View style={{ display: 'flex', backgroundColor: 'white', borderRadius: 5 }}>
                        <Picker
                            selectedValue={selectedOption}
                            onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
                        >
                            <Picker.Item label={selectedOption ? selectedOption : 'Select modal'} value={null} />
                            <Picker.Item label="Benford's feature extraction" value="benfordsXgb" />
                            <Picker.Item label="T-test for feature extraction" value="plainttestXgb" />
                            <Picker.Item label="KS - test for feature extraction" value="kstestsvm" />
                            <Picker.Item label="K - test for feature extraction" value="ktestsvm" />
                            <Picker.Item label="iterative T-test" value="iterativettXgb" />
                            <Picker.Item label="iterative Z-test" value="iterativezzXgb" />
                            <Picker.Item label="iterative T-Z test" value="iterativetzXgb" />
                            <Picker.Item label="iterative Z-T test" value="iterativeztXgb" />
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity onPress={handlePredict} style={[{ backgroundColor: "#174c70", height: 43, width: 301, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }]}>
                    <Text style={[{ color: "white", fontSize: 15, fontWeight: 600 }]}>Predict</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={logout} style={{ marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HomeScreen