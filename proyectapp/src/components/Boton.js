import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const Boton = ({onPress, title, backgroundColor, marginBottom = 0}) => {
  return (
    <TouchableHighlight
      style={[styles.estiloButton, {backgroundColor, marginBottom}]}
      onPress={onPress}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  estiloButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default Boton;
