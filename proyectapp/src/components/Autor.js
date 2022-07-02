import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Boton from './Boton';
import FlatListView from './FlatListView';
import Input from './Input';
import ModalInicio from './ModalInicio';
import Titulo from './Titulo';

const Autor = () => {
  const [listaautor, setListaautor] = useState([
    {
      idAutor: 1,
      nomCom: 'Luis Peralta Leon',
      nomPais: 'España',
    },
    {
      idAutor: 2,
      nomCom: 'Guadalupe Juarez Rosas',
      nomPais: 'Argentina',
    },
    {
      idAutor: 3,
      nomCom: 'Karla Hernandez Perez',
      nomPais: 'Madrid',
    },
    {
      idAutor: 4,
      nomCom: 'Pedro Antonio Limon Lechuga',
      nomPais: 'Peru',
    },
    {
      idAutor: 5,
      nomCom: 'Susana Martinez Rivera',
      nomPais: 'Colombia',
    },
  ]);
  const [listapais, setListapais] = useState([
    {idPais: 1, nomPais: 'España'},
    {idPais: 2, nomPais: 'Argentina'},
    {idPais: 3, nomPais: 'Colombia'},
    {idPais: 4, nomPais: 'Peru'},
    {idPais: 5, nomPais: 'Madrid'},
  ]);
  const [filtroautor, serFiltroautor] = useState([]);
  const [nombrebusqueda, setNombrebusqueda] = useState('');
  const [visiblemodal, setVisiblemodal] = useState(false);
  const [tituloeditaragregar, setTituloeditaragregar] = useState('');

  useEffect(() => {
    serFiltroautor(listaautor);
  }, []);
  useEffect(() => {
    if (nombrebusqueda == '') {
      serFiltroautor(listaautor);
    } else {
      const filtro = listaautor.filter(p => p.nomCom.includes(nombrebusqueda));
      serFiltroautor(filtro);
    }
  }, [nombrebusqueda]);
  const Cerrar = () => {
    setVisiblemodal(false);
  };
  const Recuperar = obj => {
    setTituloeditaragregar('Editar Autor');
    setVisiblemodal(true);
  };
  const Guardar = () => {};
  const Nuevo = () => {
    setVisiblemodal(true);
    setTituloeditaragregar('Agregar Autor');
  };

  return (
    <View>
      <ModalInicio
        title={tituloeditaragregar}
        visible={visiblemodal}
        onPressCerrar={Cerrar}>
        <Input text="Nombre" placeholder="Ingrese el nombre" />
        <Input
          text="Apellido Paterno"
          placeholder="Ingrese el Apellido Paterno"
        />
        <Input
          text="Apellido Materno"
          placeholder="Ingrese el apellido Materno "
        />
      </ModalInicio>
      <Titulo title={'Autor'} />
      <View style={{margin: 15}}>
        <Boton
          title="Nuevo"
          onPress={() => Nuevo()}
          backgroundColor="#0b5ed7"
          marginBottom={15}
        />
        <Input
          placeholder="Ingrese nombre autor"
          value={nombrebusqueda}
          onChangeText={value => setNombrebusqueda(value)}
        />

        <FlatListView
          data={filtroautor}
          propiedadId="idAutor"
          propiedadColumn1="nomCom"
          propiedadColumn2="nomPais"
          anchos={[45, 25, 30]}
          onPressRecuperar={Recuperar}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Autor;
