import React, { useContext } from 'react'
import { cUserContext } from './UserContext';

export const LoginScreen = () => {
    
    const vContext = useContext(cUserContext);

    //console.log(vContext);

    const { vSetUser } = vContext;

    const cUser2 = {
        vId: 702360073,
        vName: "Javier Mendoza Blandon",
        vEmail: "javiereduardom.b22@gmail.com"
    }
    
    return (
        <div>

             <h1> Login </h1>
             <hr />

             <button className='btn btn-primary m-2'
                      onClick={ () => vSetUser(cUser2) }
                     >
                Inicializar
             </button>
            
        </div>
    )
}
