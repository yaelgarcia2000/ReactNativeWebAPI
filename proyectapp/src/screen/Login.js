import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
const Login = () => {
  const [user, setUser] = useState('Lupita');
  const [password, setPassword] = useState('08091011');
  const IngresarDatos = () => {
    Alert.alert(
      'Aviso',
      'Dio clic en Ingresar: \n' +
        '\nEl usuario es: ' +
        user +
        ' \ncontraseña: ' +
        password,
    );
  };
  const Registrar = () => {
    Alert.alert('Aviso', 'Dio clic en Registrar', [
      {
        text: 'Aceptar',
        onPress: () => Alert.alert('Aviso', 'Dio clic en Aceptar'),
      },
      {
        text: 'Cancelar',
        onPress: limpiar,
      },
    ]);
  };
  const limpiar = () => {
    setUser('');
    setPassword('');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.titulo}>Página Login</Text>
      <View style={styles.avatar}>
        <Image
          style={styles.imagen}
          source={require('../assest/images/Caricatura.jpg')}
        />
      </View>
      <View style={styles.formulario}>
        <Text style={styles.styleLabelForm}>Usuario:</Text>
        <TextInput
          style={styles.styleInput}
          keyboardType="default"
          onChangeText={value => setUser(value)}
          value={user}
        />
        <Text style={styles.styleLabelForm}>Contraseña:</Text>
        <TextInput
          style={styles.styleInput}
          keyboardType="numeric"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
          value={password}
        />
        <View style={styles.styleButton}>
          <Button title="Ingresar" onPress={IngresarDatos} />
          <Button title="Registra" onPress={Registrar} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 20,
  },
  avatar: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 30,
    borderRadius: 100,
  },
  formulario: {
    margin: 20,
    backgroundColor: 'yellow',
  },
  styleLabelForm: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginVertical: 10,
  },
  styleInput: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderRadius: 10,
    fontSize: 16,
  },
  styleButton: {
    marginTop: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
export default Login;
