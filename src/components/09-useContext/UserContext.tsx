import { createContext } from 'react'
import { IUserContext,IUser } from '../interfaces';


const vUser3: IUserContext = {};

const f_setUser = (a: {}) => {}

const vUser2: IUser = {
    vUser: vUser3,
    vSetUser: f_setUser
};

export const cUserContext = createContext(vUser2);