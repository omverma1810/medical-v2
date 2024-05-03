import React, { useState } from 'react';
import { View, } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Flex } from '@ant-design/react-native';

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  return (
    <View style={{display:'flex',}}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
      >
        <Picker.Item label="Option 1" value="Option 1" />
        <Picker.Item label="Option 2" value="Option 2" />
        <Picker.Item label="Option 3" value="Option 3" />
      </Picker>
    </View>
  );
};

export default MyComponent;
