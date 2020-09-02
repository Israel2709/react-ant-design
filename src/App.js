import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Modal, Button } from 'antd';

import CustomModal from './Modal/Modal'

class App extends Component{
  constructor( props ){
    super();
    this.state = {
      visible : false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    console.log("botón ok")
    this.setState({
      visible: false,
    });
  };

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
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <CustomModal
          title="Mi modal"
          text="algun texto"
          visible={this.state.visible}
          handleOk = { this.handleOk }
          handleCancel = { this.handleCancel }
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
