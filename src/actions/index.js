// @flow

import type { AddTodo, RemoveTodo, Id, Input } from '../flow-types'

export const addTodo = (h: Input): AddTodo => ({type: 'ADDTODO', data: h})
export const deleteTodo = (i: Id): RemoveTodo => ({type: 'REMOVETODO', id: i})