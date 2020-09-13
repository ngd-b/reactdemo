/**
 * 
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

// 组件
import ShowInfo from './component/ShowInfo';
import UserInfo from './component/UserInfo';

export default function ReduxDemo(){

    return (<div>
        <Provider store={store}>
            <ShowInfo />
            <UserInfo />
        </Provider>    
    </div>);
}