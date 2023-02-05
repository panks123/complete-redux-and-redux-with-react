const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creators
const buyCake = ()=>{
    return {
        type: BUY_CAKE
    }
}
const buyIceCream = ()=>{
    return {
        type: BUY_ICECREAM
    }
}

const intialCakesValue = {
    numberOfCakes : 10
}
const intialIcecreamsValue = {
    numberOfIcecreams : 20
}

// creating multiple reducers

const cakeReducer = (state = intialCakesValue, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default: 
            return state
    }
}

const icecreamReducer = (state = intialIcecreamsValue, action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM: 
        return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1
        }

        default: return state
    }
}

// So now the cakeReducer will only handle the cake state, it has nothing to do with iceCreams
//  and icecreamReducer will only handle the icecream state, it has noting to do with cakes

// Combining the reducers - (because createStore takes only one reducer as argument)

// - redux provides a method called combineReducers to combine multiple reducers into one
// this method accepts an object as argument

const reducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(reducer)

console.log("Initial state: ", store.getState()) // { cake: { numberOfCakes: 10 }, icecream: { numberOfIcecreams: 20 } } - So now the overall state looks like this

// So now
// accessing cakes
console.log(store.getState().cake.numberOfCakes)
// accessing icecream
console.log(store.getState().icecream.numberOfIcecreams)

const unsubscribe = store.subscribe(()=>{ return console.log("Updated state: ", store.getState())})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
