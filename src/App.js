import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useState } from 'react';
import Todo from './components/Todo';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import TodoForm from './components/TodoForm';
import { appReducer, intialState } from './reducers/app.reducer';
import { addContact, addTodo, markTodo, removeContact, removeTodo } from './actions/app.actions';

function App() {
  const [state, dispatch] = useReducer(appReducer, intialState);

  return (
    <div className="app">
      <div className="container">
        <div style={{ border: '1px solid black', padding: '10px' }}>
          <h1 className="text-center mb-4">Todos</h1>
          <TodoForm addTodo={(todo) => dispatch(addTodo(todo))} />
          <div>
            {state.todos.map((todo, index) => (
              <Card key={index}>
                <Card.Body>
                  <Todo todo={todo}
                    index={index}
                    markTodo={() => dispatch(markTodo(index))}
                    removeTodo={() => dispatch(removeTodo(index))}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        <br />

        <div style={{ border: '1px solid black', padding: '10px' }}>
          <h1 className="text-center mb-4">Contacts</h1>
          <ContactForm addContact={(contact) => dispatch(addContact(contact))} />
          <div>
            {state.contacts.map((contact, index) => (
              <Card key={index}>
                <Card.Body>
                  <Contact contact={contact}
                    index={index}
                    removeContact={() => dispatch(removeContact(index))} />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
