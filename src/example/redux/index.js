 
 import React from 'react';
 import {createStore} from 'redux';
 // import reducers from './reducers';
 import ShowInfo from './components';
 // let store = createStore(reducers);

 function ReduxExample(props){

    const {infos,addInfo,deleteInfo} = props;
    const render = ()=><div>
        <ShowInfo
            infos={infos}
            addInfo={addInfo}
            deleteInfo={deleteInfo} 
        />
    </div>
    // store.subscribe(render);
    return render();
 }
// store.subscribe(ReduxExample);
 export default ReduxExample;