
import { ITodo } from "../../interfaces";


export const f_todoReducer = ( pState: ITodo [] = [], pAction: any) => {
  
    switch (pAction.type) {
        case 'add':
         return [...pState, pAction.payload]; // adding a new toDo to the state and returning the new state
        //break;

        case 'delete':
            return pState.filter( vArrResult => vArrResult.id !== pAction.payload.id );
        
        case 'toggle':
            return pState.map ( vArrMap => (vArrMap.id === pAction.payload.id)
                   ? { ...vArrMap, done: !vArrMap.done } // implicit return 
                   : vArrMap // else
            );
    
        default:
            return pState;
    }
    
}



