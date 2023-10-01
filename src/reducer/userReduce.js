import { Items } from "./items";

const InitialState = {
    user:false,
    data :{
        name:null
    }
}

export const UserReducer = (state=InitialState, action)=>{
    switch (action.type) {
        case Items.login:
            return {
                user:true,
                data:action.payload
            }
        case Items.logout:
            return{
                user:false,
                data:null
            }
        default:
            return state
    }
}