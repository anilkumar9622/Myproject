import React from "react";

export default function Badcrumble(props){
    const path = props.path || [];
    return <ul style={{display:'flex',gap:'10px'}}>
        <li>{path[0]}</li>
        <li>{path[1]}</li>
        <li>{path[2]}</li>
    </ul>
}