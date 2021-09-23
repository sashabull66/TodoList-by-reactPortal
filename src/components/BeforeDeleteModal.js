import React from "react";


export const BeforeDeleteModal = ({title, del, hide}) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.modal}>
                <p style={styles.p}>Вы уверены что хотите удалить задачу: '{title}'</p>
                <div style={styles.buttonWrapper}>
                    <button className={'red'} style={styles.button} onClick={del}>Yes</button>
                    <button className={'green'} style={styles.button} onClick={hide}>No</button>
                </div>

            </div>

        </div>
    )
}


const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(1,1,1,0.4)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
    },
    modal: {
        background: 'white',
        width: '40%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    p: {
        textAlign: 'center'
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button:{
        padding:'15px 35px',
        fontSize: '15px'
    }
}

