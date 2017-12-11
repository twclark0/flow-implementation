import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0
  }

  handleAddTodo = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
    this.props.addTodo(this.state.count)

  }
  handleRemoveTodo = (i) => () => {
    this.props.deleteTodo(i)
  }
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <ul>
          {
            this.props.list.todos.map((t, i) => (
              <li key={i} onClick={this.handleRemoveTodo(i)}>{t}</li>
            ))
          }
        </ul>
        <button onClick={this.handleAddTodo}>Click Me</button>
      </div>
    )
  }
}

export default App;
