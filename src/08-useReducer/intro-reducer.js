const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

// Creo el Reducer con un estado inicial

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    return state;

}

// Inicializo una variable donde cargo el contenido del Reducer

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

// Añado un nuevo estado a nuestro Reducer

todos = todoReducer( todos, addTodoAction );

console.log({ state: todos });
