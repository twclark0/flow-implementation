import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0,
    input: ''
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }
  handleRemoveTodo = (i) => () => {
    this.props.deleteTodo(i)
  }
  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }
  render() {
    return (
      <div className='todo-container'>
        <h1>Todo List</h1>
        <ul className={'todo-ul'}>
          {
            this.props.list.todos.map((t, i) => (
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
