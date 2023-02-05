import { BUY_ICECREAM } from "./icecreamActionTypes"

const initialState = {
    numberOfIcecreams: 20
}


const icecreamReducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1
        } 

        default: return state
    }
}

export default icecreamReducer