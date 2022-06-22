import React from 'react';
import {Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <>
      <Text style={styles.titulo}>Página Login</Text>
    </>
  );
};
const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
  },
});
export default App;
