import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes: {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// Step 1: Define the method mapStateToProps (when we want to access the redux state in a component we define this method)

const mapStateToProps = (state)=>{
  // this function recieves the redux state as parameter which can be used to retrieve the appropriate state property which we want to access (here we want numberOfcakes)
  // and returns an object containing the property of the state we want in this component
  return {
    numberOfCakes : state.numberOfCakes
  }
}
// this function is used to map our state from the redux store to the props of the compoenent - 
// after mapping we can use the state from the redux store inside the componenet

// step 2: Define the function mapDispatchToProps
const mapDispatchToProps = (dispatch)=>{
  // this function recieves redux's dispatch method as parameter
  // and returns an object
  return {
    buyCake : ()=>{
      // this function which dispatches the action creator buyCake() from redux
      dispatch(buyCake())
    }
  }
}
// this function is used to map the dispatch of an actionCreator to our component's prop
// After mapping we can use the actionCreator dispatch in our component using props to dispatch action

// step 3: connect these two functions(mapStateToProps, mapDispatchToProps) with this component - for that we use connect function from the react redux library which returns an HOC

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) 


// Summary:

// what we did is:
// 1. created actions, action creators, and reducer
// 2. Then created the store and exported it for use in the react components
// 3. To use the store's state inside our react component we first wrapped the whole app in the Provider component provided with react-redux library
// 4. Then inside the component in which we want to use the store's state, we defined two functions
//    - mapStateToProps and mapDispatchToProps
// then we connected these methods with the store and the component
