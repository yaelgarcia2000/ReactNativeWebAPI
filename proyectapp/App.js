import React from 'react';
import Autor from './src/components/Autor';

import Login from './src/screen/Login';
import TipoLibro from './src/screen/TipoLibro';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <Autor />
      </NativeBaseProvider>
    </>
  );
};

export default App;
