import React from 'react'
import { IBtnIncrement } from '../interfaces';

export const ShowBtnIcrement = React.memo(({ pFunctionIncrement, pIncrment }: IBtnIncrement ) => {

    console.log('Rendering againt the component ShowBtnIcrement');
   

    return (
        <button className="btn btn-outline-dark m-2"
                onClick={  () => {
                    pFunctionIncrement(pIncrment); 
                }}
        >
                Increment 
        </button>
    )

});
