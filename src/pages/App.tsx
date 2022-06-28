import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
      </div>
    )
  }
}

export default App;
