/**
 * Mobx.js 用于全局状态管理
 * Mobx-react 将mobx全局数据状态绑定到react
 */
import React from 'react';
import {observer} from 'mobx-react';
import {Form,Checkbox} from 'antd';
import {UserInfo,UserList} from './UserInfo';
import { observable } from 'mobx';

@observer
class ListUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    } 
    render(){
        return (<div>
            <p>Online Total:{this.props.userList.onlineNum}</p>
            <ul>
                {this.props.userList.userList.map(user=><UserItem key={user.id} user={user} />)}
            </ul>
        </div>)
    }
}
const formLayout = {
    labelCol:{
        span:3
    },
    wrapperCol:{
        span:4
    }
}
const UserItem = observer(({user})=><li>
    <Form layout="horizontal" {...formLayout} initialValues={{
        'online':user.online
    }}>
        <Form.Item label="姓名" name="name">
            <span>{user.name}</span>
        </Form.Item>
        <Form.Item label="年龄" name="age">
            <span>{user.age}</span>
        </Form.Item>
        <Form.Item label="是否在线" name="online" valuePropName="checked">
            <Checkbox onChange={e=>user.online = e.target.checked} />
        </Form.Item>
    </Form>
</li>);
// 测试数据

let user1 = new UserInfo("admin",32,true);
let user2 = new UserInfo("test",12,false);
let user3 = new UserInfo("小明",22,false);
let list = new UserList([user1,user2,user3]);

// 动态更新 传入ListUser组件的属性对象
setTimeout(()=>{
    list.userList.push(new UserInfo("小李",20,false));
},3000);
// 直接使用observable 方法，定义观测数据对象
let store = observable({
    name:"hello"
});
const Test = observer((props)=><>
    <span>{props.obj.name}</span>
    <button onClick={e=>props.obj.name="world"}>更新</button>
</>);
export default function MobxDemo(){
    return (<>
        <Test obj = {store} />
        <ListUser userList = {list} />
    </>)
};