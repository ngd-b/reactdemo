
let num=0;

export default (state=[],action)=>{
    let {type,name,id} = action;
    switch(type){
        case "ADD":
            state.push({
                id:num++,
                name:name
            });
            return state;
        case "DELETE":
            let index = state.findIndex(item=>item.id===id);
            state.splice(index,1);
            return state;
        default:
            return state;
    }
}