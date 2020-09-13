/**
 * 组件一
 */
import React,{useContext} from 'react';

import UserContext from './MyContext';

export default function ChildOne(){
    const MyContext = useContext(UserContext);

    return (<div>
        <p>ChildOne</p>   
        <span>{MyContext.info.name}</span> 
    </div>)
}