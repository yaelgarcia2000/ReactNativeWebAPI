import React from 'react';
import {FlatList, View, Text, Pressable, Image, StyleSheet} from 'react-native';
const FlatListView = ({
  data,
  propiedadId,
  propiedadColumn1,
  propiedadColumn2,
  onPressRecuperar,
  onPressEliminar,
  anchos = [30, 40, 30],
}) => {
  return (
    <FlatList
      keyExtractor={item => item[propiedadId]}
      data={data}
      renderItem={({item}) => (
        <View style={styles.estiloFlatList}>
          <Text style={{width: anchos[0] + '%'}}>{item[propiedadColumn1]}</Text>
          <Text style={{width: anchos[1] + '%'}}>{item[propiedadColumn2]}</Text>
          <View
            style={{
              flexDirection: 'row',
              width: anchos[2] + '%',
              justifyContent: 'space-around',
            }}>
            <Pressable onPress={() => onPressEliminar(item)}>
              <Image
                style={{height: 30}}
                source={require('../assest/icons/Eliminar.png')}
              />
            </Pressable>
            <Pressable onPress={() => onPressRecuperar(item)}>
              <Image source={require('../assest/icons/Editar.png')} />
            </Pressable>
          </View>
        </View>
      )}
    />
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
export default FlatListView;
