import React,{ useState,useCallback, useEffect } from 'react'

import { ShowBtnIcrement } from './ShowBtnIncrement';

import '../02-useEffect/effects.css';


export const CallBackHook = () => {

   const [Counter, setCounter] = useState(10);

   // Example 01 of use of the hook useCallback
   const f_Cb_Increment = useCallback( ( a: number ) => {
          setCounter( vC => vC + a ); // another form to obtain the counter state with out use the counter like a dependency.
       },[setCounter] ); // we can't use counter like dependency because no has effect.


   // eXAMPLE 02 OF  of use of the hook useCallback WITH useEffect hook
    useEffect(() => {
        
    }, [f_Cb_Increment])

    return (
        <div>

            <h1> useCallback hook { Counter } with TypeScript </h1>
            <hr />

            <ShowBtnIcrement  pFunctionIncrement={ f_Cb_Increment } pIncrment={ 10 }/>
            
        </div>
    )
}

/*

React.memo = se usa para memorizar un valor cuando el argumento de la función encerrada en ( ) es el mismo/no cambia.

useMemo() = se usa para memorizar un valor cuando una o mas dependencias mantienen su valor/no cambian. 
El primer argumento es la función/callback que se vuelve a ejecutar si estas dependencias cambian. 
Devuelve una forma memorizada de la función.

useCallback() = se usa para mantener la referencia a una función 
(se puede decir que se mantiene la posición de memoria de esa función)
 siempre que sus dependencias se mantengan/no cambien.
 Devuelve una versión memorizada de la función que se le coloque, que será usada en otros lugares del código.

*/