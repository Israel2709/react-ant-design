import React, { Component } from 'react';

import { Modal } from 'antd';

class CustomModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        {/*deconstruimos los props que hemos pasado a nuestra modal*/}
        const { title, text, names, visible, handleOk, handleCancel,listaDeClases } = this.props
        return (
            <Modal
                {/*visible determina si la modal se muestra o no, y viene desde el componente padre*/}
                visible={visible}
                {/*asignamos los handlers que trajimos desde el componente padre */}
                onOk = { handleOk }
                onCancel = { handleCancel }
                className = { listaDeClases.join(" ")}
            >
                <h1>{title}</h1>
                <p>{text}</p>
                <ul>
                    {
                        names.map(name => {
                            return <li>{name}</li>
                        })
                    }
                </ul>
            </Modal>

        );
    }

}

export default CustomModal;
