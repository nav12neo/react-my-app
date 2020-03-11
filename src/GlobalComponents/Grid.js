import React from 'react';
import axios from 'axios';
import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get(this.props.metaData.url)
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data.data
                    });
                })
            .catch((error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }


    render() {
        let result = "Loading....!!!";
        let {error, isLoaded, items} = this.state;
        let metaData = this.props.metaData;
        let actions = Object.keys(metaData.actions);

        if (error) {
            result = "Error...!!!";
        } else {
            if(isLoaded) {
                result =
                 <table>
                    <thead>
                        <tr>
                            { metaData.columns.map( (column) => (
                                <td key={column.key} className={column.key}>
                                    {column.label}
                                </td>
                            ))}
                            { actions.map( (action) => (
                                <td key={action}>

                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        { items.map(item => (
                            <tr key={item.id}>
                                { metaData.columns.map( (column) => (
                                    <td key={column.key}>
                                        {item[column.key]}
                                    </td>
                                ))}
                                { actions.map( (action) => (
                                    <td onClick={() => metaData.actions[action](item)} className={`actions ${action}`} key={action}>
                                        <span >{action}</span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        }

        return result;
    }

}

export default Grid;