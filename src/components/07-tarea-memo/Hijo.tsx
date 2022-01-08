import React from 'react'
import { IBtnIncrement } from '../interfaces/index';

export const Hijo = React.memo(({ pIncrment, pFunctionIncrement }:IBtnIncrement) => {

    console.log('  I the componente: "Hijo" was render againg :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => pFunctionIncrement( pIncrment ) }
        >
            { pIncrment }
        </button>
    )

});
