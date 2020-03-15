import React from 'react';
import './Events.css';
import BarChart from '../../GlobalComponents/BarChart/BarChart';

class Events extends React.Component {

    state = {
        data: [12, 5, 6, 6],
        width: 300,
        height: 200,
        id: "barChart",
        metaData : {
            title :"Bar Chart"
        }
    };

    render () {
        return (
            <div class="main-container">
                <h2>Events</h2>
                <p>{this.props.description}</p>
                <BarChart id={this.state.id} data={this.state.data} width={this.state.width} height={this.state.height} metaData={this.state.metaData} />
            </div>
        )
    }
}

export default Events;