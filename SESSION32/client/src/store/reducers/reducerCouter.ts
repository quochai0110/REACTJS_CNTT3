type Action={
    type:string,
    payload:number
}
const initialState ={
    counter:0
}

export const reducerCounter= (state=initialState,action:Action )=>{
        switch (action.type) {
            case "INCREASE":
            return {...state,counter:state.counter+action.payload};
            case "DECREASE":
            return state.counter-=1
            default:
            return state;
        }
}