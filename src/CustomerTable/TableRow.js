import React from "react";


function TableRow(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.country}</td>
            <td>{props.area}</td>
        </tr>
    )
}

export default TableRow;
