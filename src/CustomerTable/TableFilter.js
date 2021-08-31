import React from "react";



function TableFilter(props){
    const inputChangeHandler = (event) =>{
        let query = event.target.value;
        console.log(query);
        props.onChangeQuery(query);
    }
    return (
        <div>
            <input 
                type="text" 
                id="myInput" 
                onKeyUp={inputChangeHandler}
                placeholder="Search for content.."/>
        </div>
    )
}

export default TableFilter;
