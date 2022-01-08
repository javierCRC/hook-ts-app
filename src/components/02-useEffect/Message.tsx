import React, { useEffect, useState } from 'react'
import { ICoors } from '../interfaces'

export const Message = () => {
    

    // interface
    const objCoors: ICoors = {
        pX:0,
        pY:0
    }

    const [coordsState, setCoordsState] = useState(objCoors);
    
    const { pX , pY} = coordsState;


    useEffect(() => {

         console.log('Monted component');

         const f_mouseMove = (e: any) =>{
             const C_Coors = { pX: e.x , pY: e.y }; // destructuring
             console.log(C_Coors);
             setCoordsState(C_Coors);
         }

         window.addEventListener('mousemove', f_mouseMove);

        return () => {
            window.removeEventListener('mousemove', f_mouseMove); // for remove the even listener.
            console.clear();
        }
    }, [])


    return (
        <>
           <h2> Eres genial</h2>

           <p> X:{ pX } Y:{ pY }</p>  
        </>
    )
}
