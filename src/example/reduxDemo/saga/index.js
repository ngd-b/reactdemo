/**
 * saga 
 */
import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import {UserInfo} from '@API';
import {GET_USER, GET_USER_FAILD, GET_USER_SUCCESSED} from '../redux/actionType';

// 模块接口请求
const {getUserInfo} = UserInfo;
function* fetchUserInfo(action){
    try{
        const user = yield call(getUserInfo,action.info.userId);
        yield put({type:GET_USER_SUCCESSED,info:user})
    }catch(e){
        yield put({type:GET_USER_FAILD,})
    }
}

function* rootSaga(){
    yield takeEvery(GET_USER,fetchUserInfo);
}

// function* rootSaga(){
//     yield takeLatest(GET_USER,getUserInfo);
// }
export default rootSaga;