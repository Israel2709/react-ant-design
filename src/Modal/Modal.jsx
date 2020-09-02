import React, { Component } from 'react';

import { Modal } from 'antd';

class CustomModal extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { title, text, names, visible, handleOk, handleCancel,listaDeClases } = this.props
        return (
            <Modal
                visible={visible}
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
