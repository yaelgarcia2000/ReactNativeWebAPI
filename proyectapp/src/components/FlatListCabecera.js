import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatListCabecera = ({title}) => {
  return (
    <View style={styles.estiloFlatList}>
      <Text style={{width: '30%', fontWeight: 'bold'}}>{title[0]}</Text>
      <Text style={{width: '40%', fontWeight: 'bold'}}>{title[1]}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  estiloFlatList: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingBottom: 10,
    borderColor: 'blue',
    borderBottomWidth: 0.2,
  },
});
export default FlatListCabecera;
