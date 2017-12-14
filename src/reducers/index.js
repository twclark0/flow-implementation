// @flow

import { combineReducers } from 'redux'

import type { AddTodo, RemoveTodo, StoreState, ReducerState, TodosAction } from '../flow-types'

const initialState: ReducerState = {
    todos: []
}

const handleAddTodo = (state: ReducerState, action: AddTodo): ReducerState => (
    {
        todos: [...state.todos, action.data]
    }
)

const handleRemoveTodo = (state: ReducerState, action: RemoveTodo): ReducerState => (
    {
        todos: [
            ...state.todos.slice(0, action.id),
            ...state.todos.slice(action.id + 1)
        ]
    }
)


const list = (state = initialState, action): ReducerState => {
    const handlers = {
        'ADDTODO': handleAddTodo,
        'REMOVETODO': handleRemoveTodo
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer: StoreState = combineReducers({
  list
})

export default rootReducer