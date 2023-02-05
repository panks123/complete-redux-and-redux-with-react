import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

// useSelector Hook - It is a hook provided by react-redux library that acts as a close equivalent to the 'mapStateToProps' funcion
// i.e. to get hold of any state property we use the useSelector hook 

function CakeContainerUsingHooks() {

    const numberOfCakes = useSelector((state)=>{ return state.numberOfCakes})
    // useSelector hook accepts a function as parameter, this function acts as a selector function

    const dispatch = useDispatch() // useDispatch returns a reference to the redux store's dispatch method
    // now this 'dispatch' can be used to dispatch actions

  return (
    <div>
      <h2> No. of cakes: {numberOfCakes}</h2>
      <button onClick={()=>{ dispatch(buyCake())}}>Buy cake</button>
    </div>
  )
}

export default CakeContainerUsingHooks
