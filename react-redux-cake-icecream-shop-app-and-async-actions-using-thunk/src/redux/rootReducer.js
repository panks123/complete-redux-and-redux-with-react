import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer"
import icecreamReducer from "./icecream/icecreamReducer"
import usersReducer from "./user/usersReducer"

const reducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: usersReducer
})

export default reducer