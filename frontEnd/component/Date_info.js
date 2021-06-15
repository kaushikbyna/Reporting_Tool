import React from 'react'
import "../style/date_info.css"
import Edit_Text from './Edit_Text';

function Date_info(props) {
    return (
        <div className="date">
            <p>{props.dateTitle}</p> 
            <p><Edit_Text value={props.date}/></p>
        </div>
    )
}

export default Date_info;
