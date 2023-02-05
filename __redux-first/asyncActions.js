// asynchronous actions


// the application we're going to build here

// fetch data of users from an api and store it in the redux store

const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false, // to show the loading message when data is being loaded
    data : [], // to store the fetched data of users
    error: '' // if data fetching was not successful, store error message in this
}

// Actions 
// Three actions 
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST' // when this action is dispatched , the reucer sets the loading to true
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS' // when this action is dispatched , the reucer sets the loading to false, then set the 'data' as the fetched users data
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE' // when this action is dispatched , the reucer sets the loading to false, and then sets 'error' message if data fetching faced some kind of error and it was unsuccessful


// action creators

const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users // fetched users - we send it with action while dispatching this action
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Reducer

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }  
        
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
    }
}

// define async action creaters 

// we have learnt that an action creator returns an action object
// but the redux-thunk middleware gives us the ability to return a function from an action creator instead of an action object
const fetchUsers = ()=>{
    return function(dispatch){
        // this function need not to be pure now, it can have side-effects, e.g. async API calls
        // also this function is able to dispatch an action - because it recieves dispatch method as argument

        // 1. 
        dispatch(fetchUsersRequest()) // this will set the loading to true

        // 2. 
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (response)=>{
            // If the data was fetched successful
            // const users = response.data // - it is an array
            const users = response.data.map((user)=>{ return user.id}) // retuning only user_id for ech user
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            // In case if any error occurs while fetching data
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// the middle-ware we are applying to our redux store here is redux-thunk 
// redux-thunk allows us to define asynchronous action creators in our application 

// subscribe to the store
store.subscribe(()=> { console.log(store.getState())})
// const unsubscribe =  store.subscribe(()=> { console.log(store.getState())})

// then we dispatch the asynchronous action creator

store.dispatch(fetchUsers())







// unsubscribe() - if we call unsubscribe method here then we cannot see the log message that we have passed in the subscribe method
// this is because reducer here is performing the action asynchronously, if we call unsubscribe()
// before it could complete the action the unsubscribe method already executes, hence the log message does not comes




