import type { Product } from "../../interface/interface"

const initialState :Product[]=[
    {
        id:1,
        name:"cake",
        price:60,
        quantity:15,
    },
    {
        id:2,
        name:"hamburger",
        price:20,
        quantity:10,
    }
]
interface Action {
    type:string,
    payload:any
}
export const reducerCart=(state=initialState,action:Action)=>{
    switch (action.type) {
        case "INCREASE":
            return state
        default:
            return state
    }
}