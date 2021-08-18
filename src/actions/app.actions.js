export const REMOVE_TODO = 'Remove Todo';
export const ADD_TODO = 'Add Todo';
export const MARK_TODO = 'Mark Todo';
export const ADD_CONTACT = 'Add Contact';
export const REMOVE_CONTACT = 'Remove Contact';

export const removeTodo = (index) => {
    return ({type: REMOVE_TODO, index});
}

export const addTodo = (todo) => {
    return ({type: ADD_TODO, todo});
}

export const markTodo = (index) => {
    return ({type: MARK_TODO, index});
}

export const addContact = (contact) => { 
    return ({type: ADD_CONTACT, contact});
}

export const removeContact = (index) => {
    return ({type: REMOVE_CONTACT, index});
}