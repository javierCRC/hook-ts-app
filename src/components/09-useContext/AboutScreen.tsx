import React, { useContext } from 'react';
import { cUserContext } from './UserContext';

export const AboutScreen = () => {

    const vContext = useContext(cUserContext);

    //console.log(vContext);

    const { vUser,vSetUser } = vContext;
    
    const f_handleUser = () => {
        vSetUser( {} );
    }

    return (
        <div>

             <h1> About </h1>
             <hr />

             <p> Usuario: <b> { vUser.vName } </b></p>
            
             <br></br>
             <pre>
                 { JSON.stringify(vUser,null,3) }
             </pre>

             <button className='btn btn-warning m-2'
                      onClick={ f_handleUser }
                     >
                Logout
             </button>
            
        </div>
        
    )
}
