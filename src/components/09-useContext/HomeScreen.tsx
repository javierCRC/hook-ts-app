import React, { useContext } from 'react'
import { cUserContext } from './UserContext';

export const HomeScreen = () => {

    const vContext = useContext(cUserContext);

    //console.log(vContext);

    const { vUser } = vContext;

    //console.log(vName);
    
    return (
        <div>

             <h1> Home </h1>
             <hr />
             <p> Usuario: { vUser.vName } </p>

             <pre>
                 { JSON.stringify(vUser,null,3) }
             </pre>
        </div>
    )
}
