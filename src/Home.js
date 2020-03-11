import React from 'react';
import Clock from './GlobalComponents/Clock';

class Home extends React.Component {
    render () {
        return (
            <div>
                <h2>Welcome to react app</h2>
                <Clock></Clock>
            </div>

        )
    }
}

export default Home;