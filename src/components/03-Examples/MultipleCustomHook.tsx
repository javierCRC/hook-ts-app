import React from 'react'


import { useFetch } from '../../hooks/useFetch';
import { useCounter2 } from '../../hooks/useCounter2';

import './effects.css';
import { IReqQuote } from '../interfaces';


export const MultipleCustomHook = () => {

    const { counter , f_Increment, f_Decrement} = useCounter2(1);
    
    const objRequest: IReqQuote = {
        pData: [{
            quote_id:0,
            quote:'',
            author:'',
            series:''
        }],
        pLoading: true,
        pError: ''
    }
    
    const vURLAPI= `https://breakingbadapi.com/api/quotes/${counter}`;
    const state = useFetch(vURLAPI,objRequest);
    
    //console.log(state);
    
     const { pLoading, pData } = state;
     
     console.log(pData);

     const { quote , author  } = !!pData && pData[0]; // if exist data and is not null , extract the data of the position 0 of the array.

    return (
        <div>
            <h1> Breaking bad quotes TypeScript</h1>
            <hr />

             {
                 // ternaring condition
                 pLoading
                 ? // if
                    (
                        <div className='alert alert-info text-center'> 
                            Loading...
                        </div>
                    )
                 : // else
                    (
                        <blockquote className='blockquote text-right'>
                        <p className='mb-0'> { quote } </p>
                        <footer className='blockquote-footer'> { author } </footer>
                        </blockquote>
                     )
             }
            

        <button className="btn btn-primary m-2"
                onClick={ f_Decrement }>
                prev quote
        </button>

        <button className="btn btn-primary"
                onClick={ f_Increment }>
                Next quote
        </button>
            

        </div>
    )
}

