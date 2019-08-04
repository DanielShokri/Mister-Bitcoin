import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import './AppHeader.css';

class AppHeader extends Component {

    render() {
        return (
            <header>
                <div className="header">
                    <Link to="/" className="logo">Mister-Bitcoin</Link>
                    <div className="header-right">
                        <Link to="/" className="active" href="#">Home</Link>
                        <Link to="/contact">Contacts</Link>
                        <Link to="/statistics">Statistics</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader