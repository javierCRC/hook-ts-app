import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { cUserContext } from '../09-useContext/UserContext';
import { IUser } from '../interfaces';

export const MainApp = () => {

    const [User, setUser] = useState({});

    const vUser2: IUser = {
        vUser: User,
        vSetUser: setUser
    };

    return (
        <cUserContext.Provider value={ vUser2 }>
            <AppRouter />
        </cUserContext.Provider>
    )
}
