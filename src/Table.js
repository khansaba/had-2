import React, { Component } from 'react';
class Table_had extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Student_name_had</th>
                        <th>Roll_no</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ahmad</td>
                        <td>75</td>
                        <td>syit</td>
                    </tr>
                    <tr>
                        <td>kaus</td>
                        <td>76</td>
                        <td>syit</td>
                    </tr>
                    <tr>
                        <td>zeenat</td>
                        <td>91</td>
                        <td>syit</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const Table = () => {
    return (
        <h1>student table</h1>
    );
}

export default Table_had;
export {
    Table
}