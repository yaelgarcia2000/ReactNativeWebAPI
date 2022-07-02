import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import Titulo from '../components/Titulo';
import Boton from '../components/Boton';
import FlatListCabecera from '../components/FlatListCabecera';
import Input from '../components/Input';
import FlatListView from '../components/FlatListView';
import ModalInicio from '../components/ModalInicio';
const TipoLibro = () => {
  const [listatipolibro, setListatipolibro] = useState([
    {
      id: 1,
      nomTipLib: 'Cuento',
      des: 'Es una historia corta con pocos personajes',
    },
    {
      id: 2,
      nomTipLib: 'Terror',
      des: 'Historia de mucho miedo',
    },
    {
      id: 3,
      nomTipLib: 'Suspenso',
      des: 'Nos tiene con el corazon en la mano',
    },
    {
      id: 4,
      nomTipLib: 'Ficcion',
      des: 'Es irreal',
    },
  ]);
  const [nombrebusqueda, setNombrebusqueda] = useState('');
  const [filtradotipolibro, setFiltradotipolibro] = useState([]);
  const [visiblemodal, setVisiblemodal] = useState(false);
  const [tituloeditaragregar, setTituloeditaragregar] = useState('');
  const [nombretipolibro, setNombretipolibro] = useState('');
  const [descripciontipolibro, setDescripciontipolibro] = useState('');
  useEffect(() => {
    setFiltradotipolibro(listatipolibro);
  }, []);
  const Buscar = () => {
    if (nombrebusqueda != '') {
      const filtro = listatipolibro.filter(p =>
        p.nomTipLib.includes(nombrebusqueda),
      );
      setFiltradotipolibro(filtro);
    } else {
      setFiltradotipolibro(listatipolibro);
    }
  };
  const Recuperar = obj => {
    setVisiblemodal(true);
    setTituloeditaragregar('Editar Tipo Libro');
    setNombretipolibro(obj.nomTipLib);
    setDescripciontipolibro(obj.des);
  };
  const Nuevo = () => {
    setVisiblemodal(true);
    setTituloeditaragregar('Agregar Tipo Libro');
    Limpiar();
  };
  const Limpiar = () => {
    setNombretipolibro('');
    setDescripciontipolibro('');
  };
  const Eliminar = obj => {
    Alert.alert(
      'Confirmacion',
      'Desea eliminar el tipo libro: ' + obj.nomTipLib,
      [
        {
          text: 'Si',
        },
        {
          text: 'No',
        },
      ],
    );
  };
  const Cerrar = () => {
    setVisiblemodal(false);
  };
  const Guardar = () => {};
  return (
    <View>
      <ModalInicio
        visible={visiblemodal}
        title={tituloeditaragregar}
        onPressCerrar={Cerrar}
        onPressGuardar={Guardar}>
        <Text>Nombre Tipo Libro</Text>
        <Input
          value={nombretipolibro}
          onChangeText={value => setNombretipolibro(value)}
          placeholder="Ingrese nombre tipo libro"
        />
        <Text>Descripción Tipo Libro</Text>
        <Input
          value={descripciontipolibro}
          onChangeText={value => setDescripciontipolibro(value)}
          placeholder="Ingrese descripcion tipo libro"
        />
      </ModalInicio>
      <Titulo title="Tipo Libro" />
      <View style={{margin: 15}}>
        <Boton
          title="Nuevo"
          onPress={() => Nuevo()}
          backgroundColor="#0b5ed7"
          marginBottom={15}
        />
        <View style={{flexDirection: 'row'}}>
          <Input
            placeholder={'Ingrese nombre'}
            flex={1}
            onChangeText={value => setNombrebusqueda(value)}
            value={nombrebusqueda}
          />
          <Boton title="Buscar" onPress={Buscar} backgroundColor="#198754" />
        </View>
        <FlatListCabecera title={['Nombre', 'Descripción']} />
        <FlatListView
          data={filtradotipolibro}
          propiedadId="id"
          propiedadColumn1="nomTipLib"
          propiedadColumn2="des"
          onPressRecuperar={Recuperar}
          onPressEliminar={Eliminar}
        />
      </View>
    </View>
  );
};
export default TipoLibro;
