const redux = require('redux')

// to create a store  redux provides a method called createStore()
const createStore = redux.createStore


// Creating an action
const BUY_CAKE = 'BUY_CAKE'

// action
// {
//     type: BUY_CAKE
// }

// Action creator - It is a function that returns an action

function buyCake() {
    // return an action

    return {
        type: BUY_CAKE
    }
}


// Reducer

// Note : the application's state has to be represented as a single object

const initialValue = {
    numberOfCakes: 10
    // however in reality our application can have many other properties in the state object
}

// for the state parameter we supply a default value as initialValue (i.e. initial State)
const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            // in case we have other properties in the state object, first crete the copy of the state object using ... operator and then mutate the desired property
            ...state, // So if there were other properties they would have remained unchanged
            numberOfCakes: state.numberOfCakes - 1
        }

        default:
            return state;
    }
}


// Store 

// One store for the entire application is present
// Points about 'store':

// 1. It is responsible for holding the appliction state
// 2. It exposes a method called getState(), using which we can access the application state
// 3. It provides a method called dispatch(action) which allows us to update the state based on the action
// 4. It allows the application to register listeners to subscribe using the subscribe(listener) method
// 5. Finally, we can also unsubscribe to the store by calling the function which was returned in the subscribe(listener) call

// Let's see these steps one by one

// 1. Store to hold the application state

const store = createStore(reducer) // createStore function accepts a paremeter as the 'reducer' - the reducer has the initialState
                                   // and ability to update the state - So we can say that createStore configures the store with the reducer

// 2. accessing the state 
console.log("Initial state: ", store.getState()) // As we have not updated the state anytime, so it will give the initial state : { numberOfCakes: 10 }

// 4. subscribing to the store for the changes in the state of the store
// using subscribe() method which takes a function as its argument

const unsubscribe = store.subscribe(()=> console.log("Updated state: ", store.getState())) // whenever there is an update in the 
                                                                                          // application state, this paased method is automatically called because we have subscribed to it

// 3. update the state by dispatching some action to the store - 
// using dispatch method, dispatch method takes an action as argument
store.dispatch(buyCake()) // - O/p : { numberOfCakes: 9 }
// we are passing an action creator as argument which returns the action
store.dispatch(buyCake()) // - O/p : { numberOfCakes: 8 }
store.dispatch(buyCake()) // - O/p : { numberOfCakes: 7 }

// Finally we can unsubscribe from the store changes (if we want after doing all operations with the store) by calling the unsubscribe method returned by the subscribe()
unsubscribe()

// So summary of all the above things in redux

// 1. Create actions
// 2. Create action creators
// 3. Create the the reducer
// 4. Create the store using the reducer
// 5. Subscribe for any changes in the store
// 6. If an update in the store is required, then dispatch the sction
// 7. After all actions performend, unsubscribe from all the changes in the store

// In react application(using react-redux library), the same thing we'll be using but using some helper functions


