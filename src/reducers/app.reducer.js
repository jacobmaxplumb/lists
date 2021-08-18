import { addTodo, ADD_CONTACT, ADD_TODO, MARK_TODO, REMOVE_CONTACT, REMOVE_TODO } from "../actions/app.actions"

export const intialState = {
    todos: [{text: 'Do Stuff', isDone: false}],
    contacts: [{name: 'James', number: '1231231234'}]
}

export const appReducer = (state, action) => {
    switch(action.type) {
        case MARK_TODO:
            const markTodoState = {...state};
            markTodoState.todos[action.index].isDone = true;
            return markTodoState;
        case ADD_TODO:
            const addTodoState = {...state};
            addTodoState.todos.push(action.todo);
            return addTodoState;
        case REMOVE_TODO:
            const removeTodoState = {...state};
            removeTodoState.todo.splice(action.index, 1);
            return removeTodoState;
        case ADD_CONTACT:
            const addContactState = {...state};
            addContactState.contacts.push(action.contact);
            return addContactState;
        case REMOVE_CONTACT:
            const removeContactState = {...state};
            removeContactState.contacts.splice(action.index, 1);
            return removeContactState;
        default:
            return state;
    }
}