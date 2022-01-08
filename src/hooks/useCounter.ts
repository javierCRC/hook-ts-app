
import React, { useState } from 'react'

export const useCounter = ( pValue: number = 105) => {
    
    const [state, setState] = useState(pValue);

    const f_Increment = (pFactor: number) => {
        setState ( state + pFactor );
    }

    const f_Reset = () => {
        setState ( pValue );
    }

    const f_Decrement = (pFactor: number) => {
        setState ( state - pFactor );
    }

    return {
        state,
        f_Increment,
        f_Decrement,
        f_Reset
    };

}
