import React from 'react';
import {Modal, StyleSheet, View, Text} from 'react-native';
import Titulo from '../components/Titulo';
import Boton from '../components/Boton';
const ModalInicio = ({
  visible,
  title,
  onPressCerrar,
  onPressGuardar,
  children,
}) => {
  return (
    <Modal visible={visible}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Titulo title={title} flex={1} />
          <Text style={styles.estiloRegresar} onPress={onPressCerrar}>
            Regrasar
          </Text>
        </View>
        <View style={{margin: 10}}>
          {children}
          <View
            style={{
              flexDirection: 'row',
              margin: 30,
              justifyContent: 'space-around',
            }}>
            <Boton
              title="Guardar"
              backgroundColor="#198754"
              onPress={onPressGuardar}
            />
            <Boton
              title="Cancelar"
              onPress={onPressCerrar}
              backgroundColor="#fa5858"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  estiloRegresar: {
    backgroundColor: '#fa5858',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 14,
    paddingHorizontal: 30,
  },
});
export default ModalInicio;
