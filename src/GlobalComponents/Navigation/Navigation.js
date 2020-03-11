import React from 'react';
import './Navigation.css';
import { NavLink} from "react-router-dom";

class Navigation extends React.Component {

    render () {
        return (
            <nav className="App-navigation">
                <NavLink exact to="/" activeClassName="active"  > Home</NavLink>
                <NavLink to="/dashboard" activeClassName="active" > Employees</NavLink>
                <NavLink to="/events" activeClassName="active" > Events</NavLink>
            </nav>
        );
    }
}

export default Navigation;
