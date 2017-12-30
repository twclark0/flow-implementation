// @flow

import React, { Component } from 'react';
import './App.css';

type Index = number

type Input = string

type State = {
  input: Input,
  todos: Array<Input>
}

type Props = {
  title: string
}

class App extends Component<Props, State> {

  state = {
    input: '',
    todos: []
  }

  handleAddTodo = () => {
    this.setState(prevState => ({
        input: '',
        todos: [...prevState.todos, prevState.input]
    }))
  }
  handleRemoveTodo = (i: Index) => () => {
    this.setState(prevstate => ({
        todos: [
            ...prevstate.todos.slice(0, i),
            ...prevstate.todos.slice(i + 1)
        ]
    }))
  }
  handleInputChange = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ input: e.currentTarget.value })
  }
  render() {
    return (
      <div className='todo-container'>
        <h1>{this.props.title}</h1>
        <ul className={'todo-ul'}>
          {
            this.state.todos.map((t, i) => (
              <li className={'todo-li'} key={i} onClick={this.handleRemoveTodo(i)}>{t}</li>
            ))
          }
        </ul>
        <div className={'todo-inputContainer'}>
          <input className={'todo-input'} type="text" onChange={this.handleInputChange} value={this.state.input} />
          <button className={'todo-button'} onClick={this.handleAddTodo}>Click Me</button>
        </div>
      </div>
    )
  }
}

export default App;
