import React from "react";
import {Portal} from "./UI/Portal";
import {BeforeDeleteModal} from "./BeforeDeleteModal";

export const TodoItem = ({title, id, del}) => {
    const [modal, showModal] = React.useState(false)
    return (
        <li className="collection-item">
            <div style={styles.wrapper}>
                <span>{title}</span>
                <i className={'material-icons red-text'} style={styles.icon} onClick={() => {
                    showModal(true)
                }}>delete</i>
                {modal && <Portal><BeforeDeleteModal
                    title={title}
                    hide={() => {
                        showModal(false)
                    }}
                    del={del.bind(null, id)}
                /></Portal>}
            </div>
        </li>
    )
}

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        cursor: 'not-allowed'
    }
}