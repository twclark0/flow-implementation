// @flow

export type StoreState = {
    list: {
        todos: Array<string>
    }
}

export type ReducerState = {
    todos: Array<string>
}

export type ComponentsProps = {
  addTodo: (string) => AddTodo,
  deleteTodo: (number) => RemoveTodo,
  list: {
    todos: Array<string>
  }
}

export type Input = string

export type Id = number

export type AddTodo = { type: 'ADDTODO', data: Input }

export type RemoveTodo = { type: 'REMOVETODO', id: Id }

export type TodosAction = AddTodo | RemoveTodo

