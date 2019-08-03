import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {

    render() {
        return (
            <header>
                <div className="header">
                    <a href="#" className="logo">Mister-Bitcoin</a>
                    <div className="header-right">
                        <a className="active" href="#">Home</a>
                        <a href="#contact">Contacts</a>
                        <a href="#about">Statistics</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader