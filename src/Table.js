import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td width="300">
                    {row.name}
                </td>
                <td width="300">
                    {row.job}
                </td>
                <td width="180" align="center">
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    }
    );
    return <tbody>{rows}</tbody>;

}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;  

        return (
            <table border="1">
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;