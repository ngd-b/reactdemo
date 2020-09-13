/**
 * 子组件
 */
import React,{useState} from 'react';

export default function ChildOne(props){
    const [name,setName] = useState();
    let {dispatch} = props;

    return (<div>
        <input value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={e=>dispatch({type:'add',name:name})}>add</button>
    </div>)
}