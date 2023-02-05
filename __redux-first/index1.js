// Creating multiple actions and hadling multiple actions in the single reducer

const redux = require('redux')
const createStore = redux.createStore


// Creating multiple actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


// Action creator - It is a function that returns an action

function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}


// Reducer - handling multiple actions

const initialValue = {
    numberOfCakes: 10,
    numberOfIceCreams: 20,
    //... more we can add
}

// for the state parameter we supply a default value as initialValue (i.e. initial State)
const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }

        default:
            return state;
    }
}


const store = createStore(reducer)

console.log("Initial state: ", store.getState()) 

const unsubscribe = store.subscribe(()=> console.log("Updated state: ", store.getState())) 

store.dispatch(buyCake()) 
store.dispatch(buyCake()) 
store.dispatch(buyCake()) 

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()


// But in case of large applications the single reducer will become huge due to handling many actions(in case we have many state properties)

// So we need multiple reducers for scalability 