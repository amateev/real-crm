import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Container from "./components/Container";
import './App.css';

class App extends Component {
    constructor() {
    super();

    this.state = {
      agents : [],
      name : 'Agents:'
    }

    //if not doing arrow function, then you will need this:
    // this.deletePet = this.deletePet.bind(this);
  }


  deleteAgent = (event) => {
    var id = event.target.getAttribute('data-id');
    alert('Hi');
        return fetch(`http://localhost:3001/agents/${id}`, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(res => res.json()).then(deletedAgentId => {

            let agents = this.state.agents.filter(agent => agent.id !== deletedAgentId)

            this.setState({agents})
          })


  }

    createAgent = (event) => {
    event.preventDefault();

    let first_name = event.target.children[0].value;
    let last_name = event.target.children[1].value;
debugger;
    return fetch("http://localhost:3001/agents", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({first_name, last_name})
      }).then(res => res.json()).then(rj => {
        let agents = [...this.state.agents, rj];
        this.setState({agents})
      })
  }



  




  componentDidMount() {
    return fetch("http://localhost:3001/agents")
    .then((res) => res.json())
      .then(resultingJSON => this.setState({agents : resultingJSON}))
  }

  render() {
    return (
      <div>
        <Nav />
        
        <Container />
        <div className="App-header">
          
            <h2>{this.state.name}</h2>
    
            {this.state.agents.map((x) =>
            <p key={x.id}> 
              {x.first_name}  {x.last_name} <button onClick={this.deleteAgent} data-id={x.id}>x</button>
            </p>
            )}

            <form onSubmit={this.createAgent}>
              <input type="text" name="first name" placeholder="enter first name" />
              <input type="text" name="last name" placeholder="enter last name" />

              <button>add an agent</button>
            </form>


        
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
