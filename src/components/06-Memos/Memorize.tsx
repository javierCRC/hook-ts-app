import React, { useState } from 'react'

import { useCounter2 } from '../../hooks/useCounter2';
import  { Small }  from './Small';

import '../02-useEffect/effects.css';

export const Memorize = () => {
    
    const { counter, f_Increment } = useCounter2(20);

    const [show, setShow] = useState(false);

    const f_handleClickShow = () => {
        setShow( !show );
    }
    
    return (
        <div>

            <h1>Memorize with TypeScript </h1>
            <hr />

            <h2> Counter: <Small pCounterValue = {counter} /> </h2>

            <button className='btn btn-outline-success'
                    onClick={ f_Increment }
                    >
                +1
            </button>

            <button className="btn btn-outline-primary m-2"
                    onClick={ f_handleClickShow }>
                Show <i className="fas fa-eye"></i> / Hide <i className="fas fa-eye-slash"></i> /--/ { JSON.stringify(show)}
            </button>

        </div>
    )
}
