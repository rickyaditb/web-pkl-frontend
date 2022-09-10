import React, {createContext, useState} from 'react';


const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
    const [berhasilMsg, setBerhasilMsg] = useState("")
    return (
        <RegisterContext.Provider value={{berhasilMsg, setBerhasilMsg}} >
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterContext;