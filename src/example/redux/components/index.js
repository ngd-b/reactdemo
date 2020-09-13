/**
 * 
 */
import React,{useState} from 'react';
import PropTypes from 'prop-types';

function ShowInfo(props){
    let [name,setName] = useState(null);

    let {infos,addInfo,deleteInfo} = props;
    return (<div>
            {infos.map(item=><React.Fragment>
                    <p key={item.id}>{item.name} <span onClick={e=>deleteInfo(item.id)}>-</span></p>
                </React.Fragment>)}

            <input value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={e=>addInfo(name)}>添加</button>
        </div>);
}

ShowInfo.propTypes = {
    infos:PropTypes.array.isRequired,
    addInfo:PropTypes.func.isRequired,
    deleteInfo:PropTypes.func.isRequired
}

export default ShowInfo;