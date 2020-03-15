import React, {Component} from 'react';
import * as d3 from "d3";
import './BarChart.css';

class BarChart extends React.Component {

    drawChart() {

        const data = this.props.data;
        const h = this.props.height,
              w = this.props.width;

        const svg = d3.select("#" + this.props.id).append("svg")
            .attr("width",w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - (10 * d) - 3)

    }

    componentDidMount() {
        this.drawChart();
    }

    render(){
        return(
            <div class="chart_container">
                <h3>{this.props.metaData.title}</h3>
                <div id={this.props.id}></div>
            </div>
        )
    }

}

export default BarChart;