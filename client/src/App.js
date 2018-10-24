import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
    super();

    this.state = {
      agents : [{_id: 1, first_name: 'Jessica', last_name: 'Simpson'}, {_id: 2, first_name: 'Morgan', last_name: 'Kent'}],
      name : 'Real CRM'
    }

    // this.deletePet = this.deletePet.bind(this);
  }

  componentDidMount() {
    return fetch("http://localhost:3001/agents")
    .then((res) => res.json())
      .then(resultingJSON => this.setState({agents : resultingJSON}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
            <h1>{this.state.name}</h1>
          
            {this.state.agents.map((x) =>
            <p key={x._id}> 
              {x.first_name} | {x.last_name} <button onClick={this.deletePet} data-id={x._id}>x</button>
            </p>
            )}

            <form onSubmit={this.createAgent}>
              <input type="text" name="first name" placeholder="enter first name" />
              <input type="text" name="last name" placeholder="enter last name" />

              <button>add an agent</button>
            </form>

        
        </header>
      </div>
    );
  }
}

export default App;
