import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Add Todo</Form.Label>
                <Form.Control type="text"
                    className="input"
                    placeholder="todo"
                    onChange={(e) => setValue(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" variant="primary mb-3">Submit</Button>
        </Form>
    )
}

export default TodoForm;