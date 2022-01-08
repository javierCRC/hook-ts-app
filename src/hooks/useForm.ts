import { useState } from "react";
//import { IFormNew } from "../components/interfaces";


export const useForm = ( pObject: any = {} ) => {
     

    const [stateValues, setStatesValues] = useState(pObject);
    
    const f_handleInputChange = ( { target }: any ): any => {
        //console.log(target);
        
        setStatesValues( {
           ...stateValues,
           [ target.name] : target.value
         }
        );
   }

   const f_handleCleanForm = () => {
    setStatesValues(pObject);
 }

   //return [ stateValues , f_handleInputChange , f_handleCleanForm ];
   return { stateValues , f_handleInputChange , f_handleCleanForm };
}
