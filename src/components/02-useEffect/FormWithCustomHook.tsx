import React, { SyntheticEvent, useEffect } from 'react'

import './effects.css';
import { IFormNew } from '../interfaces/index';
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    
    const objFormu: IFormNew = {
        pName:'',
        pEmail:'',
        pPassword:''
    }

    // use of cutom hook
    const [ stateValues , f_handleInputChange ] = useForm(objFormu);

    const { pName, pEmail , pPassword } = stateValues; // destructuring
      
    useEffect( () => {
        //console.log('Hey');

    },[]) // only active this event one time

    useEffect( () => {
        console.log('Changed the email');
    },[pEmail]) // only active this event in every change of the email input
      
    useEffect( () => {
        //console.log('Changed the name');
    },[pName]) // only active this event in every change of the name input

    const f_handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        console.log( stateValues );
        alert(JSON.stringify(stateValues));
    }

    return (
        <form onSubmit={ f_handleSubmit }>
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

            <div className="form-group">
                    <input type="password" 
                           name="pPassword"
                           className="form-control"
                           placeholder="**********"
                           value= { pPassword }
                           onChange = { f_handleInputChange }
                    />
            </div>

            <button type='submit' className='btn btn-primary'>
                       Save
            </button>


        </form>
    )
}
