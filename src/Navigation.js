import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className="row" id="navbar">
                <nav className="col navbar navbar-dark danger-color navbar-expand-lg">
                    <NavLink to="/">
                        <span className="navbar-brand mb-0 h1">bob.io</span>
                    </NavLink>
                    <div className="" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               <NavLink to="/add-client">
                                    <button type="button" className="btn btn-light">New client</button>
                               </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
    
export default Navigation;