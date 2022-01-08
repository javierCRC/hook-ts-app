import React  from 'react';
import { IPropsCounter } from '../interfaces';


// If we don't use the React.memo in this component will be to render on any change of other hook with useState
export const Small = React.memo(( { pCounterValue }: IPropsCounter) => { // example of use of pros in FC with TypeScript https://www.youtube.com/watch?v=XxV395LzRTk

    console.log('Rendering the component SMALL');

    return (
        <small>
                {  pCounterValue } 
        </small>
    );

});



