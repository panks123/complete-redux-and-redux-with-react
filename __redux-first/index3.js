// Middlewares - 
// To extend the functionality of redux we use middleWares, middlewares adds custom functionalities 
// in redux and extend the functionality of redux

const redux = require('redux')
const reduxLogger = require('redux-logger') // it is a middleware for logging - Here we are using this

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware // redux provides a method applyMiddleware to apply middlewares
const logger = reduxLogger.createLogger()

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

const reducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

// passing the applyMiddleware call as the second argument to apply the middleware functionality
const store = createStore(reducer, applyMiddleware(logger))

console.log("Initial state: ", store.getState()) 

const unsubscribe = store.subscribe(()=>{})

store.dispatch(buyCake())

// So what logger middleware does is: whenever an action is dispatched - it logs the whole information like -
// - time when the action was dispatched
// - what was the previous state
// - which action was dispatched
// - next state after the action was done

// store.dispatch(buyCake())
// store.dispatch(buyCake())

// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

unsubscribe()



// Next :

// Till now we have seen synchronous actions - as soon as the action was dispatched, the state was immediately updated

// But sometimes the things will happen in asynchronous way - like fetching the data asynchronously and then updating
// the state
// see next in asyncActions.js file
