/**
 * 
 */
import {ADD_USER,UPDATE_USER} from './actionType';

let id = 0;

// 添加个人信息
export const addUser = item=>({
    type:ADD_USER,
    info:{
        id:id++,
        ...item
    }
})
// 修改个人信息
export const updateUser = item=>{
    return {
        type:UPDATE_USER,
        info:{
            ...item,
        }
    }
}