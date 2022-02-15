import React from "react";
import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{
    onAddTodo: (text: string) => void
}> = (props) => {
const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value; // ? => can be null | ! => you are sure it never be null
        if(enteredText.trim().length === 0){
            // trow an error
            return;
        }

        props.onAddTodo(enteredText);
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