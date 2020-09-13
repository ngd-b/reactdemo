/**
 * react-rotuer-dom 示例操作
 */
import React,{useState,useEffect,Suspense,lazy} from 'react';
import { BrowserRouter as Router ,Switch,Route, Link} from 'react-router-dom';
import { Menu } from 'antd';
import loadable  from '@loadable/component';

function RouteDemo(){
    let [menus,setMenus] = useState([]);
    useEffect(() => {
        setTimeout(()=>{
            setMenus([
                {
                    key:"/userInfo",
                    value:"./userInfo",
                    name:"用户管理"
                },
                {
                    key:"/deptInfo",
                    value:"./deptInfo",
                    name:"机构管理"
                },
                {
                    key:"/reduxDemo",
                    value:"../reduxDemo",
                    name:"redux测试使用"
                }
            ])
        },3000);
    }, [])
    return (<Router>
            <Menu mode="vertical">
                {menus.map(item=><Menu.Item key={item.key}><Link to={item.key}>{item.name}</Link></Menu.Item>)}
            </Menu> 
            <Switch>
                <Suspense fallback={<p>加载中...</p>}>
                    {menus.map(route=><Route path={route.key} component={lazy(()=>require(`${route.value}`).default)} />)}
                </Suspense>
            </Switch>
        </Router>);
}

export default RouteDemo;