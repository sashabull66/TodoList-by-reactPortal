import React from "react";

export const TodoItem = ({title, del}) => {
    return (
        <li className="collection-item">
            <div style={styles.wrapper}>
                <span>{title}</span>
                <i className={'material-icons red-text'} style={styles.icon} onClick={del}>delete</i>
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
        cursor:'not-allowed'
    }
}