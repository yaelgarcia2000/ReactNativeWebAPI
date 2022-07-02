import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Titulo = ({title, flex = 0}) => {
  return <Text style={[styles.Title, {flex}]}>{title}</Text>;
};
const styles = StyleSheet.create({
  Title: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#343a40',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
export default Titulo;
