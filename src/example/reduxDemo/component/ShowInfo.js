/**
 * 用户组件信息
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {updateUser} from '../redux/action';

function ShowInfo(props){

    return(<div>
           <ul>
                {props.allUser.map((item,index)=><InfoItem key={index} {...item} fn={()=>props.updateUser({id:item.id,status:!item.status})} />)}
           </ul>
        </div>);
}

// 单人的信息展示
function InfoItem(props){

    function handleClick(e){
        e.stopPropagation();
        props.fn();
    }
    return(<li onClick={handleClick} style={{color:props.status?"#f34234":"#2b34ff"}}>
            <div style={{border:"1px solid #eee"}}>
                <p>名称：{props.name}</p>
                <p>年龄：{props.age}</p>
            </div>
        </li>);
}

// ShowInfo.propTypes = {
//     allUser:PropTypes.arrayOf(PropTypes.shape({
//         id:PropTypes.string.isRequired,
//         status:PropTypes.bool.isRequired
//     }).isRequired).isRequired,
//     updateUser:PropTypes.func.isRequired
// }
// 映射外部数据源给组件的props
const mapStateToProps = (state,ownProps)=>{
    // const {} = state.allUser;
    return {
        allUser:state.allUser
    }
}
// const mapDispacthToPros = (dispatch)=>{
//     return {
//         updateUser:updateUser
//     }
// }
// connect 参数 
export default connect(mapStateToProps,{updateUser})(ShowInfo);