import { useEffect, useRef, useState } from 'react'

export const useFetch = ( pUrlEndPoint: string , pInitialRequest: any ) => {
   
    // example of use a hook with real example
    const vIsComponentMounted = useRef( true );
    
    const [state, setState] = useState(pInitialRequest);
    
    //call the operation one time when the component is loaded.
    useEffect(() => {
        
        return () => {
            // the component is dismounted
            vIsComponentMounted.current = false;
        }
    },[])

    // only change when the pUrlEndPoint changed.
    useEffect(() => {

        setState(pInitialRequest);
        
        fetch (pUrlEndPoint)
          .then ( respo => respo.json())
          .then( data => {

              //setTimeout(() => {

                if( vIsComponentMounted.current ){
                    setState({
                        pLoading:false,
                        pError: null,
                        pData: data
                    });
                }
                /*else{
                    alert("The component is dismounted");
                } */
                
            //}, 2000);

          }).catch(()=> {
            setState({
                pLoading:false,
                pError: 'dont be obtain the data',
                pData: null
            });
      });

    }, [pUrlEndPoint])
    
    return state;

}
