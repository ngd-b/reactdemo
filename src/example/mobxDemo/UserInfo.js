/**
 * 用户属性监听
 */
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

// 手动定义可观测对象的属性的观测方式
// decorate(UserList,{
//     userList:observable,
//     onlineNum:computed
// });

export {UserInfo,UserList}