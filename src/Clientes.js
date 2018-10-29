import React, { Component } from 'react';
 
class Clientes extends Component {
    createClients(client) {
        return (
            <div className="card col-sm-10 col-lg-4">
                <div className="card-body">
                    <h5 className="card-title">{client.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Bags: {client.bags}</h6>
                    <a href={"mailto:"+client.contactInfo.email} className="btn btn-danger">Send an email</a>
                </div>
            </div>
        );
    }
 
    render() {
        var todoEntries = this.props.clientsArray;
        var listItems = todoEntries.map((client) => this.createClients(client));
    
        return (
            <div className="row" id="cards-container">
                {listItems}
            </div>
        );
    }
};
 
export default Clientes;