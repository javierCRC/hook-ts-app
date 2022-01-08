import React from 'react'

import { f_MessageProcess } from '../../../helpers';
import { useForm } from '../../../hooks/useForm';
import { ITodo, IToDoAdd } from '../../interfaces/index';

export const ToDoAdd = ({ pF_handleAddToDo }: IToDoAdd ) => {

    // custom hook for capture the value of each input of any form.
    const [ stateValues , f_handleInputChange , f_handleCleanForm ] = useForm({
        txtDescription:''
    });

    // destructuring the description value of stateValue for be use to individual form
    const { txtDescription } = stateValues;
    
    const f_handleSubmitAddToDo = (e: any) => {
        e.preventDefault();
        
        if(txtDescription.trim().length <= 1){
            f_MessageProcess("Error empty field","Can't be empty fields","error");
            return;
         }
         
        const c_NewTodo: ITodo = {
            id : new Date().getTime(),
            desc: txtDescription,
            done: false
        };

        pF_handleAddToDo(c_NewTodo);

    }

    return (
        <>
            <h4> Add ToDo <i className="far fa-list-alt"></i> </h4>
                                <hr />

                                <form  onSubmit= { f_handleSubmitAddToDo }
                                       className="bg-light my-3 p-3 pt-lg-0 border rounded" >
                                   <h5 className="font-weight-bold text-center my-4 text-success"> Registry <i className="fas fa-calendar-day"></i></h5>     
                                
                                    <div className="form-group form-row">
                                        <label className="col-12 col-form-label">Description:</label>

                                        <div className="input-group col-12 col-md-10">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text-primary"><i className="fas fa-id-card"></i></span>
                                            </div>
                                            <input type="text" 
                                                   name='txtDescription'
                                                   className="form-control"
                                                   autoComplete='off'
                                                   value={ txtDescription }
                                                   onChange={ f_handleInputChange } 
                                                   placeholder="Whrite a new To Do" />
                                        </div>
                                    </div>

                                    <div className="form-group form-row mb-0">
                                        <div className="col-auto">
                                            <button type="submit" 
                                                    className="btn btn-primary btn-block"
                                            > Save <i className="fas fa-save"></i>
                                            </button>
                                        </div>
                                    </div>

                                </form>
        </>
    )
}
