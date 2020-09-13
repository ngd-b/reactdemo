/**
 * 子组件
 */
import React from 'react';

export default function ChildOne(props){
    
    let {data,dispatch} = props;
    return (<div>
        {data.arr.map((item,index)=><div>
                <span>{item}</span>
                <span onClick={e=>dispatch({type:"delete",id:index})}>-</span>
            </div>)}
    </div>)
}