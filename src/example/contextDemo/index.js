/**
 * 
 */
import React,{useState} from 'react';

import ChildOne from './childOne';
import ChildTwo from './childTwo';

import "./index.css";
// context 
import UserContext from './MyContext';

export default function ContextDemo(){
    const [info,setInfo] = useState({
        name:"test"
    });

    function updateInfo(item){
        setInfo((preVal)=>{
            return {
                ...preVal,
                ...item
            }
        });
    }
    return(<div>
        <UserContext.Provider value={{
            info:info,
            updateInfo:updateInfo
        }}>
            <p>ContextDemo</p>
            <div style={{border:"1px solid #ccc"}}>
                <ChildOne />
            </div>
            <div style={{border:"1px solid #ccc"}}>
                <ChildTwo />
            </div>
        </UserContext.Provider>
    </div>);
}