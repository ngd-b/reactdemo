import React,{useState,useEffect,useReducer} from 'react';
import Reducer from './useReducer';

import ChildOne from "./childOne";
import ChildTwo from './childTwo';

function GetStatus(props){
    const [name,setName] = useState("admin");
    const [hobby,setHobby] = useState(["read","write","listen"]);
    // 自定义Hook
    const statusStr = useOnlineStatus(0);
    let [time,setTime] = useState(0);
    // hook reducer
    const [obj,dispatch] = useReducer(Reducer,{arr:[]});
    let timer = null;
    let childRef = null;
    useEffect(()=>{
        timer = setInterval(()=>setTime(Date().toLocaleString()),2000);
        return ()=>clearTimeout(timer);	
    });
    useEffect(()=>{
        document.title = "Hook";
        setTimeout(()=>{
            setName("test");
        },3000);
        console.log("doing");
    },[])
    useEffect(()=>{
        document.title = "Hook";
        setTimeout(()=>{
            setName("test");
        },3000);
        console.log("doing");
    })
    function handleGetInfo(e){
        e.stopPropagation();
        let obj = childRef().getInfo();
        console.log(obj);
    }
	return (<div>
        <p>{name+":"+props.name}</p>
        <ul>
            {hobby.map(item=>(<li key={item.toString()}>{item}</li>))}
        </ul>
        <p>自定义Hook:{statusStr}</p>
        <p>时间：{time}</p>
        <hr/>
        <button onClick={handleGetInfo}>获取</button>
        <ChildInfo onRef={ref=>childRef=ref} />
        <hr/>
        <p>Hoot - useReducer</p>
        <div style={{border:"1px solid #bbb"}}>
            <ChildOne data={obj} dispatch={dispatch} />
            <ChildTwo dispatch={dispatch} />
        </div>
    </div>);

}
function ChildInfo(props){

    let [name,setName] = useState("admin");
    useEffect(()=>{
        let {onRef} = props;
        onRef(()=>{
            return {
                getInfo:getInfo
            }
        });
    });
    function getInfo(){
        return {
            name:name
        }
    }
    return (<input value={name} onChange={e=>setName(e.target.value)} />);
}

// 定义在线状态
const statusMap = new Map([[0,"grey"],[1,"green"],[2,"yellow"],[3,"red"]]);
function useOnlineStatus(flag){
	const [status,setStatus] = useState(null);

	useEffect(()=>{
		setStatus(statusMap.get(flag));
	},[flag]);
	
	return status;
}
export default GetStatus;