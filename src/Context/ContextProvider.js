import React from 'react';
import { createContext, useState } from 'react';

export const AppContext = createContext({})

const ContextProvider = ({ children }) => {
    const [toggleRegister, setToggleRegister] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [toggleBookmark, setToggleBookmark] = useState(false)
    const [active, setActive] = useState(1)

    return (
        <AppContext.Provider value={
            {
                toggleRegister: toggleRegister, setToggleRegister: setToggleRegister,
                currentUser: currentUser, setCurrentUser: setCurrentUser,
                toggleBookmark: toggleBookmark, setToggleBookmark: setToggleBookmark,
                active: active, setActive: setActive
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;