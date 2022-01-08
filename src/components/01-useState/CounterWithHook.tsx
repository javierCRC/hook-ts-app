import React from 'react'


import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithHook = () => {


    const { state , f_Increment, f_Decrement, f_Reset } = useCounter();

    return (
        <>
              <h1> Counter with hooks { state } </h1>
               <hr />

              <button className="btn btn-primary m-2"
                  onClick = { () => {
                      f_Increment(2);
                  }}
               >
                    +1
               </button>

               <button className="btn btn-warning m-2"
                  onClick = { () => {
                     f_Reset();
                  }}
               >
                    Reset
               </button>

              <button className="btn btn-danger m-2"
                  onClick = { () => {
                      f_Decrement(2);
                  }}
               >
                    -1
               </button>
        </>
    )
}
