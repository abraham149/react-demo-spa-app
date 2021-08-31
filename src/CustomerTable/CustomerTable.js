import React, {useState} from "react";
import TableRow from "./TableRow";
import TableFilter from "./TableFilter";
import './CustomerTable.css';


function CustomerTable(props){

    const [query, setQuery] = useState('');

    const customers = props.customers;

    const changeQuery = inputQuery =>
    {
        setQuery(inputQuery);
        console.log(inputQuery);
    }

    //Filter any query match on the whole table row
    const filteredCustomers = customers.filter(customer => {
        //Search all fields of a table row for query matches
        for(var key in customer){
            if(customer[key].toString().toLowerCase().includes(query.toLowerCase())){
                return true;
            }
        }
        return false;
        
        //return customer.area.contains(query) || customer.name.contains(query) || customer.country.contains(query) || customer.id.contains(query);
        
    })


    return (
        <div>
            <TableFilter query={query} onChangeQuery={changeQuery}/>
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>ID</th>
                        <th>NAME</th>
                        <th>COUNTRY</th>
                        <th>AREA</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.map(customer => (
                        <TableRow
                            key={customer.id}
                            id={customer.id}
                            name={customer.name}
                            country={customer.country}
                            area={customer.area}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable;
