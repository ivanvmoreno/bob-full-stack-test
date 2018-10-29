import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Clients from './Clientes';
import AddClient from './AddClient';
import Navigation from './Navigation';

class App extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5555/list-clients')
          .then(response => response.json())
          .then(data => this.setState({ clients: data }));
      }

    render() {
        const ClientesComponent = (props) => {
            return (
                <Clients clientsArray={this.state.clients} />
            );
        };

        return (
            <div className="container-fluid">
                <Navigation />
                <Route exact path="/" render={ClientesComponent} />
                <Route exact path="/add-client" component={AddClient} />
            </div>
        );
    }
}
    
export default App;