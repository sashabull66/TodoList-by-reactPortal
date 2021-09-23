import React from "react";
import ReactDOM from "react-dom";

export const Portal = ({children}) => {
    let wrapper = document.querySelector('#portal');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'portal';
    }
    React.useEffect(() => {
        document.body.appendChild(wrapper);
        return () => {
            document.body.removeChild(wrapper)
        }
    })

    return ReactDOM.createPortal(<React.Fragment>{children}</React.Fragment>, wrapper)
}