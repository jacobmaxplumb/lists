import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const ContactForm = ({addContact}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addContact({name, number});
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Add Contact</Form.Label>
                <Form.Control type="text"
                    className="input"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Control type="text"
                    className="input"
                    placeholder="number"
                    onChange={(e) => setNumber(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" variant="primary mb-3">Submit</Button>
        </Form>
    )
}

export default ContactForm;