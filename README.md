This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### react 项目示例说明

`antd` - 组件UI展示；
`mobx` - 全局状态管理，以数据依赖的方式，收集组件，在依赖属性更新时进行组件更新；
`redux` - 全局状态管理；
`react-router-dom` - 页面路由管理；

### 初始react示例 - 井字棋

- [X] 在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)
- [X] 在历史记录列表中加粗显示当前选择的项目
- [X] 使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）
- [ ] 添加一个可以升序或降序显示历史记录的按钮
- [ ] 每当有人获胜时，高亮显示连成一线的 3 颗棋子
- [ ] 当无人获胜时，显示一个平局的消息

### 简单的`hook`使用

`input`受控输入，将输入的信息传入子组件的表单展示。

项目目录：`/src/example/component/`

```js
// 父组件
function Parent(){
    let [name,setName] = useState();
    return (<div>
            <Row gutter={[20,20]}>
                <Col span={24}>
                    <ChildForm name={name} />
                </Col>
                <Col span={24}>
                    <label>外部输入：</label>
                    <input value={name} onChange={e=>setName(e.target.value)} />
                </Col>
            </Row>
        </div>);
}
// 子组件
function ChildForm(props){
    let [form] = Form.useForm();
    useEffect(()=>{
        form.setFieldsValue({
            name:props.name
        });
    },[props.name])
    return (<Form form = {form} initialValues={{
        name:"admin"
    }}>
            <Form.Item name="name" label="来自父组件">
                <Input />
            </Form.Item>
        </Form>)
}
```

### react `context` 示例

使用`context` 可以跨组件传输数据，也是其他第三方组件和react关联的中间带。

详细查看文章：[React 组件间通信](https://blog.csdn.net/heroboyluck/article/details/96651410)

### 自定义hook及其他hookAPI使用

主要作用于共享数据状态，抽离公用逻辑的状态。

mulu地址：`/src/example/hookDemo`

自定义hook：
```js
// 定义在线状态
const statusMap = new Map([[0,"grey"],[1,"green"],[2,"yellow"],[3,"red"]]);
function useOnlineStatus(flag){
	const [status,setStatus] = useState(null);

	useEffect(()=>{
		setStatus(statusMap.get(flag));
	},[flag]);
	
	return status;
}
// 在其他组件中使用


// 自定义Hook
const statusStr = useOnlineStatus(0);
```

`useReducer` 在属性state具有多个状态获取对应得状态值；
```js
function reducer(state,action){
    debugger;
    switch(action.type){
        case "add":
            let arr = state.arr;
            arr.push(action.name)
            return {arr:arr}
        case "delete":
            state.arr.splice(action.id,1);
            return {arr:state.arr}
        default:
            throw new Error();
    }
}
// 在使用时初始调用
// hook reducer
const [obj,dispatch] = useReducer(Reducer,{arr:[]});
```

### `mobx`使用示例

装饰器`@**`定义观测属性，以及关联到观测组件。

参考文章目录：[在react中使用Mobx](https://blog.csdn.net/heroboyluck/article/details/108422952)

定义观测属性：
```js
import {observable,computed,decorate} from 'mobx';
// 单用户实体信息
class UserInfo{
    id = Date.now();
    @observable name = "";
    @observable age = "";
    @observable online = false;
    constructor(name,age,online){
        this.name = name;
        this.age = age;
        this.online = online
    }
}
// 多用户列表
class UserList{
    constructor(list){
        this.userList = list;
    }
    @observable userList = [];
    @computed get onlineNum(){
        // 统计用户列表中在线用户
        return this.userList.filter(user=>user.online).length;
    }
}
```
定义观测组件，使用观测属性进行关联：
```js
import React from 'react';
import {observer} from 'mobx-react';

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

// 观测属性使用
let list = new UserList([user1,user2,user3]);

// 动态更新 传入ListUser组件的属性对象
setTimeout(()=>{
    list.userList.push(new UserInfo("小李",20,false));
},3000);

// 
export default function MobxDemo(){
    return (<>
        <ListUser userList = {list} />
    </>)
};
```

### `redux` 使用示例

进行全局状态的管理；

文章：[react跨组件通信及react-redux 使用](https://blog.csdn.net/heroboyluck/article/details/105645688)

### `react-router-dom` 使用

页面路由设置，点击跳转控制页面；

