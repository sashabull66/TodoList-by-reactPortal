import React from "react";

export const Info = () => {
    return (
        <div style={{width: '90vw', height: '90vh', position: 'absolute', top:'65px', left:'0', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Todo List. Приложение создано для того что-бы попрактиковаться
                                работе с ReactDOM.createPortal</span>
                            <p>version 1.0.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}