/**
 * 使用typescript 
 */
import React from 'react';
import "./index.less";

function TSDemo(props){

    return (<div>
            <p>{props.name}</p>
        </div>);
}

export default function(){

    return <TSDemo />
}