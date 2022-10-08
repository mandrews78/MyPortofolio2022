import React from "react";
import '../App.css';
function Content(props){
    return(
        <div className="content">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes </h3>
        </div>
    )
}


export default Content