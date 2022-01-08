import React, { useMemo, useState } from 'react'

import { f_WeightProcess } from '../../helpers/weightProcess';
import { useCounter2 } from '../../hooks/useCounter2';


import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const { counter, f_Increment } = useCounter2(20);

    const [show, setShow] = useState(false);

    const f_handleClickShow = () => {
        setShow( !show );
    }

    // if the hook counter of type useState change , this memo must be re momorize againt the value of counter.
    const c_weightProcessMemo = useMemo(() => f_WeightProcess( counter ), [ counter ]);
    
    return (
        <div>

            <h1>Memo Hook with TypeScript </h1>
            <hr />

            <h2> Counter: <small> {counter} </small>  </h2>

             <p> { c_weightProcessMemo } </p>

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
