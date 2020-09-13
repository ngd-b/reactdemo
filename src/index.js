import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {createStore} from 'redux';
import reducers from './example/redux/reducers';
// Mobx 实体信息
import {UserList} from './example/mobxDemo/UserInfo';
// react 示例
import Game from './example/gameBord';
// hook
import HookForm from './example/component/HookInput.js';
// 组件测试
import HookDemo from './example/hookDemo/index';
// react context 组件测试
import ContextDemo from './example/contextDemo';
// redux
import ShowInfo from './example/redux';
// react redux 组件使用
import ReactReduxDemo from './example/reduxDemo';
// react-router-dom
import RouteDemo from "./example/routerDom";
// mobx mobx-react 使用
import MobxDemo from './example/mobxDemo';

let store = createStore(reducers);
// react-router-dom  测试使

// ========================================
// 为了redux渲染，处理render

const render = ()=> ReactDOM.render(<div>
    <h1>React 学习示例</h1>
    <h2>Hook 示例</h2>
    <HookForm />
    <h2>react 示例demo</h2>
    <Game />
    <h2>React Hook 示例demo</h2>
    <HookDemo name="我是王哈哈" />
    <hr/>
    <h2>React Context 示例demo</h2>
    <ContextDemo />
    <hr/>
    <h2>React-Redux 实例demo</h2>
    <ReactReduxDemo />
    <hr/>
    <h2>Redux 在react使用的示例demo</h2>
    <ShowInfo  
        infos={store.getState()}
        addInfo={(name)=>store.dispatch({type:"ADD",name:name})}
        deleteInfo={(id)=>store.dispatch({type:"DELETE",id:id})} />
    <hr />
    <h2>React-router-dom 测试使用</h2>
    <RouteDemo />
    <h2>Mobx/Mobx-react 使用示例</h2>
    <MobxDemo  userList = {new UserList()}/>
  </div>,
  document.getElementById('root')
);

render();
store.subscribe(render);
