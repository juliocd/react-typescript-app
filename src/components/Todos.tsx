import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = () => { //Add custom Object type componenet props
    const todosCtx = useContext(TodosContext);

    return <ul className={classes.todos}>
        {todosCtx.items.map(item => {
            // bind allows to modify JS function after being defined
            return <TodoItem 
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} 
            item={item}/>
        })}
    </ul>
}

export default Todos;

