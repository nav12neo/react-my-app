import React from 'react';
import './Events.css';

class Events extends React.Component {
    render () {
        return (
            <div>
                <h2>Events</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Events;