import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
    super();

    this.state = {
      agents : [],
      name : 'Real CRM'
    }

    //if not doing arrow function, then you will need this:
    // this.deletePet = this.deletePet.bind(this);
  }


  deleteAgent = (event) => {
    debugger;
    alert('Hi');
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
            <h2>List of Agents:</h2>
            {this.state.agents.map((x) =>
            <p key={x.id}> 
              {x.first_name} | {x.last_name} <button onClick={this.deleteAgent} data-id={x.id}>x</button>
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
