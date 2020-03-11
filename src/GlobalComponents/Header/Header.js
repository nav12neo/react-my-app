import React from 'react';
import './Header.css';

class Header extends React.Component {
    render () {
        return (
            <header className="App-header">
                <a href="/">Sign in</a>
                <a href="/dashboard">Profile</a>
            </header>
        )
    }
}

export default Header;