import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*Importamos el botón de antD*/
import { Button } from 'antd';

/*Importamos la modal personalizada que creamos*/
import CustomModal from './Modal/Modal'

class App extends Component{
  constructor( props ){
    super();
    this.state = {
      visible : false
    }
    /*Registramos los handlers que ocuparemos en la modal*/
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  /*handler para mostrar la modal*/
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  /*handler del botón ok de la modal*/
  handleOk = e => {
    console.log(e);
    console.log("botón ok")
    this.setState({
      visible: false,
    });
  };

  /*handler del botón cancelar de la modal*/
  handleCancel = e => {
    console.log(e);
    console.log("botón cancel")
    this.setState({
      visible: false,
    });
  };

  render(){
    return (
      <>
        {/*Este botón ejectuta la función showModal(), que es la que hace que se muestre la modal*/}
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>

        {/*Insertamos nuestro componente de modal personalizada*/}
        <CustomModal
          title="Mi modal"
          text="algun texto"
          {/*pasamos visible como una propiedad, esta determina si la modal se muestra o no, y se modifica desde los handlers que declaramos en la parte superior*/}
          visible={this.state.visible}
          {/*Heredamos los handles de "ok" y "cancel" a la modal que creamos*/}
          handleOk = { this.handleOk }
          handleCancel = { this.handleCancel }
          {/*Props adicionales para el funcionamiento de nuestra modal*/}
          listaDeClases = {
            [
              "mi-modal",
              "bg-dark"
            ]
          }
          names={
            [
              "karen",
              "israel"
            ]
          }
        >

        </CustomModal>
      </>
    )
  }
  
}

export default App;
