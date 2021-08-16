import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Todo from './components/Todo';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([{text: 'todo one', isDone: false}]);
  const [contacts, setContacts] = useState([{name: 'jacob plumb', number: '7343449098'}]);

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const removeContact = index => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }

  const addTodo = todo => {
    const newTodos = [...todos, {text: todo, isDone: false}];
    setTodos(newTodos);
  }

  const addContact = contact => {
    console.log(contact);
    const newContacts = [...contacts, {name: contact.name, number: contact.number}];
    setContacts(newContacts);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todos</h1>
        <TodoForm addTodo={addTodo}/>
        <div>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <Todo todo={todo}
                  index={index}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
              </Card.Body>
            </Card>
          ))}
        </div>
        <h1 className="text-center mb-4">Contacts</h1>
        <ContactForm addContact={addContact}/>
        <div>
          {contacts.map((contact, index) => (
            <Card key={index}>
              <Card.Body>
                <Contact contact={contact}
                  index={index}
                  removeContact={removeContact}/>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
