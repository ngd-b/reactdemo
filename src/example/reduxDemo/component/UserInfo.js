
/**
 * 更新逻辑部分
 */
import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../redux/action';

function UserInfo(props){
    const [name,setName] = useState();
    const [age,setAge] = useState();

    function handleClick(e){
        e.stopPropagation();
        props.addUser({
            name:name,
            age:age,
            status:false
        });
        // 
        setName("");
        setAge("");
    }
    return(<div>    
            <label>
                <span>姓名：</span>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label>
                <span>年龄</span>
                <input type="text" value={age} onChange={e=>setAge(e.target.value)} />
            </label>
            
            <button className="btn-update" onClick={handleClick}>添加</button>
        </div>);
}

export default connect(null,{addUser})(UserInfo);