import React, { useContext } from 'react';
import { useRef } from "react";
import classes from './NewTodo.module.css';

import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value; // ? => can be null | ! => you are sure it never be null
        if(enteredText.trim().length === 0){
            // trow an error
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label>Todo text</label>
            <input type="text" name="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;