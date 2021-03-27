import { T } from "antd/lib/upload/utils";

// 泛型变量
export function addNumber<T>(num:T):T{
    return num;
}
function addUser<T>(user:T[]):Array<T>{
    console.log(user.length);
    return user;
}

addNumber("admin")
addNumber(120)

addUser(["test",{
    name:'admin'
}])

// 泛型类型

let updateUser:{<U>(arg:U):U} = addNumber;

interface GenericFn<T>{
    (arg:T):T;
}

let deleteUser:GenericFn<string> = addNumber

// 泛型类
// class User<T>{
//     name:T;
//     add:(info: T) => T;
// }

// let someUser = new User<string>();
// someUser.name = '';
// someUser.add = function(name){return name};

// 使用类类型
function create<T>(f:{new ():T}):T{

    return new f();
}

// 枚举类型
enum Color{
    white = "#fff",
    black = "#000",
}

console.log(Color.black);