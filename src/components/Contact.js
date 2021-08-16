import { Button } from 'react-bootstrap';
import '../App.css';

const Contact = ({contact, index, removeContact}) => {
    return(
        <div className="item">
            <span>{contact.name} - {contact.number}</span>
            <Button  variant="outline-danger" onClick={() => removeContact(index)}>x</Button>   
        </div>
    )
}

export default Contact;