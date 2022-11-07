import React, { createContext } from 'react';


export const sharedContext = createContext();

const UserContext = ({children}) => {
    const myName = 'Maruf'
    const contextInfo = {myName};
    return (
        <div>
            <sharedContext.Provider value={contextInfo}>
                {children}
            </sharedContext.Provider>
        </div>
    );
};

export default UserContext;