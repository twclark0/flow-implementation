import React, { Component } from 'react';
import Todos from './Todos'
import './App.css';

class App extends Component {
  render() {
    return (
        <Todos title={'My List'}/>
    )
  }
}

export default App;
