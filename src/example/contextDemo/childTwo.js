/**
 * 组件二
 */
import React,{useContext} from 'react';

import UserContext from './MyContext';

export default function ChildTwo(){
    const MyContext = useContext(UserContext);

    return (<div>
        <p>child-two</p>    
        <button onClick={()=>MyContext.updateInfo({name:"admin"})}>更新</button>
    </div>);
}