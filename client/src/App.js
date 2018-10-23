import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
    super();

    this.state = {
      pets : [{_id: 1, name: 'fido', type: 'dog'}, {_id: 2, name: 'snowflake', type: 'humpster'}],
      name : 'will'
    }

    // this.deletePet = this.deletePet.bind(this);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p> 
            {this.state.name}
          </p>
            {this.state.pets.map((x) =>
            <p key={x._id}> 
              {x.name} | {x.type} <button onClick={this.deletePet} data-id={x._id}>x</button>
            </p>
          )}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
