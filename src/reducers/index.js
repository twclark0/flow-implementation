import { combineReducers } from 'redux'

const initialState = {
    todos: []
}

const handleAddTodo = (state, action) => (
    {
        todos: [...state.todos, action.data]
    }
)

const handleRemoveTodo = (state, action) => (
    {
        todos: [
            ...state.todos.slice(0, action.data),
            ...state.todos.slice(action.data + 1)
        ]
    }
)


const list = (state = initialState, action) => {
    const handlers = {
        'ADDTODO': handleAddTodo,
        'REMOVETODO': handleRemoveTodo
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer = combineReducers({
  list
})

export default rootReducer