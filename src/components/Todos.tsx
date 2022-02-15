import Todo from '../models/todo';
import TodoItem from '../components/TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{
        items: Todo[]; 
        onRemoveTodo: (id: string) => void
    }> = (props) => { //Add custom Object type componenet props

    return <ul className={classes.todos}>
        {props.items.map(item => {
            // bind allows to modify JS function after being defined
            return <TodoItem onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} item={item}/>
        })}
    </ul>
}

export default Todos;