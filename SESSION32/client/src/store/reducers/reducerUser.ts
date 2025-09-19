type Action={
    type:string,
    payload:any
}
const initialState={
    users:[
        {
            id:1,
            name:"Minh Thu",
            email:"thu@gmail.com"
        },
         {
            id:2,
            name:"Lan Hồng",
            email:"hong@gmail.com"
        }
    ]
}

export const reducerUser = (state=initialState, action:Action)=>{
    switch (action.type) {
        case "ADD":
            console.log("case thêm sinh viên");
            
            break;
    
        default:
            return state;
    }
}