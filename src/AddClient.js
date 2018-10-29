import React, { Component } from 'react';
 
class AddClient extends Component { 
    constructor() {
        super();
        this.state = {
            name: '',
            bags: 0,
            email: ''
        }

        this.addBag = this.addBag.bind(this);
        this.removeBag = this.removeBag.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
        this.addToDB = this.addToDB.bind(this);
    }

    addBag() {
        this.setState((prevState) => {
            if (this.state.bags >= 0 && this.state.bags < 5) {
                return {
                    bags: prevState.bags+1
                };
            }
        });
    }

    removeBag() {
        this.setState((prevState) => {
            if (this.state.bags > 0) {
                return {
                    bags: prevState.bags-1
                };
            }
        });
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    addToDB(e) {
        fetch('http://localhost:5555/add-client/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                bags: this.state.bags,
                contactInfo: {
                    email: this.state.email
                }
            })
        }).then(() => {
            e.preventDefault();
        })
        .catch(e => new Error(e));
    }
    
    render() {
        return (
            <div className="form-container col-sm-12 col-lg-6 offset-lg-3">
                <form onSubmit={this.addToDB}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name of passenger</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Marc Palatsi" onChange={this.updateName} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Contact email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="marc@bob.io" onChange={this.updateEmail} required/>
                    </div>
                    <label>Number of bags</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this.removeBag}>-</button>
                        </div>
                        <input type="text" className="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1" value={this.state.bags} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this.addBag}>+</button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger submit-form">Create new client</button>
                </form>
            </div>
        );
    }
};
 
export default AddClient;