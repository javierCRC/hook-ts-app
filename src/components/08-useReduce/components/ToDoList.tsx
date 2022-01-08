import React from 'react'
import { ITDList, ITodo } from '../../interfaces'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ( { pToDos, pF_handleToggleTask, pF_handleClickDelete}: ITDList ) => {
    return (
        <ul className='list-group list-group-flush'>
         
           {
                pToDos.map( ( vToDo: ITodo , i: number) => (                                       
                    
                    <ToDoListItem 
                                    key = { vToDo.id } 
                                    pToDo2= { vToDo }
                                    pIndex = { i } 
                                    pF_handleToggleTask2 = { pF_handleToggleTask }
                                    pF_f_handleClickDelete2 = { pF_handleClickDelete }
                    />
                   
               ))
          }    
                           
        </ul>
    )
}
