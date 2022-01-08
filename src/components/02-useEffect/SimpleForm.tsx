import React, { useEffect, useState } from 'react'

import './effects.css';
import { IFormNew } from '../interfaces/index';
import { Message } from './Message';

export const SimpleForm = () => {

    
    const objFormu: IFormNew = {
        pName:'',
        pEmail:'',
        pPassword:''
    }

    const [formState, setformState] = useState(objFormu);

    const { pName, pEmail} = formState; // destructuring
      
    useEffect( () => {
        //console.log('Hey');

    },[]) // only active this event one time

    useEffect( () => {
        //console.log('Changed the email');

    },[pEmail]) // only active this event in every change of the email input

    useEffect( () => {
        //console.log('Changed the name');
        
    },[pName]) // only active this event in every change of the name input

    const f_handleInputChange = ( { target }: any ): any => {
         //console.log(target);
         
         setformState( {
            ...formState,
            [ target.name] : target.value
          }
         );
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />  

            <div className="form-group">
                    <input type="text" 
                           name="pName"
                           className="form-control"
                           autoComplete="off"
                           placeholder="Your name"
                           value= { pName }
                           onChange = { f_handleInputChange } // Put the correct value thank to name of the input relationate with the destructuring
                    />
            </div>

            <div className="form-group">
                    <input type="text" 
                           name="pEmail"
                           className="form-control"
                           autoComplete="off"
                           placeholder="Your email"
                           value= { pEmail }
                           onChange = { f_handleInputChange }
                    />
            </div>

            { 
               (pName === '123') && <Message /> // conditional to show the component
            
            } 

        </>
    )
}
