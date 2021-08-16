import { Button } from 'react-bootstrap';
import '../App.css';

const Todo = ({todo, index, markTodo, removeTodo}) => {
    return(
        <div className="item">
            <span style={{textDecoration: todo.isDone ? 'line-through': ''}}>{todo.text}</span>
            <div>
            <Button  variant="outline-success" onClick={() => markTodo(index)}>o</Button>{' '}
            <Button  variant="outline-danger" onClick={() => removeTodo(index)}>x</Button>
            </div>     
        </div>
    )
}

export default Todo;