import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../saga';
// action type 
import {UPDATE_USER,ADD_USER} from './actionType';

const initState = {
    allUser:[],
    userObj:{}
}
// saga 中间件应用，
const sagaMiddleware = createSagaMiddleware();


// store 对象处理
function reducerUser(state=initState,action){
    switch(action.type){
        case ADD_USER:{
            const info = action.info;
            return {
                ...state,
                allUser:[...state.allUser,info],
                userObj:{
                }
            }
        }
        case UPDATE_USER:{
            const {id,status} = action.info;
            const index = state.allUser.findIndex(obj=>obj.id === id);
            let target = state.allUser[index];
            state.allUser.splice(index,1,{
                ...target,
                status:status
            });
            return {
                ...state,
                allUser:[...state.allUser],
                userObj:{
                }
            }
        }
        default:
            return state;
    }
}

const store = createStore(
    reducerUser,
    applyMiddleware(sagaMiddleware),
);
// 运行在 createStore 之后
sagaMiddleware.run(rootSaga);

export default store;