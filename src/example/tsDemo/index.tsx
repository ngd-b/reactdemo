/**
 * 使用typescript 
 */
import React from 'react';
import "./index.less";

interface userInfo{
    name:String
}

function TSDemo(props:userInfo){

    return (<div>
            <p>{props.name}</p>
        </div>);
}

export default function(){

    return <TSDemo name="admin" />
}