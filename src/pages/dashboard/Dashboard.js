import React from 'react';
import axios from 'axios';
import Grid from '../../GlobalComponents/Grid';
import { URL_GET_EMPLOYEES, URL_DELETE_EMPLOYEE } from '../../GlobalComponents/Constants';


import './Dashboard.css';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.metaData = {
            url : URL_GET_EMPLOYEES,
            columns : [{
                    key : "employee_name",
                    label : "Name"
                },
                {
                    key : "employee_salary",
                    label : "Salary"
                },{
                    key : "employee_age",
                    label : "Age"
                }],
            actions : {
                edit : (row) => {
                    console.log(row);
                },
                delete : (row) => {
                    let url = `${URL_DELETE_EMPLOYEE}/${row.id}`;
                    console.log(url);
                    axios.delete(url).then((response) => {
                        console.log(response);
                    })
                }
            }
        }
    }

    render () {

        return (
            <div>
                <h2>Employees</h2>
                <div className="container">
                    <Grid metaData={ this.metaData }></Grid>
                </div>
            </div>
        )
    }
}

export default Dashboard;