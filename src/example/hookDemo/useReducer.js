/**
 * 
 */
function reducer(state,action){
    debugger;
    switch(action.type){
        case "add":
            let arr = state.arr;
            arr.push(action.name)
            return {arr:arr}
        case "delete":
            state.arr.splice(action.id,1);
            return {arr:state.arr}
        default:
            throw new Error();
    }
}

export default reducer;