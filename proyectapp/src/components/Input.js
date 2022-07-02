import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({placeholder, onChangeText, value, flex = 0, text = ''}) => {
  return (
    <>
      {text == '' ? null : <Text style={{marginVertical: 10}}>{text}</Text>}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{
          borderWidth: 0.2,
          borderColor: 'blue',
          flex,
        }}
      />
    </>
  );
};
export default Input;
