import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIcecream } from '../redux'

function IcecreamContainerUsingHooks() {

    const numberOfIcecreams = useSelector((state)=>{ return state.icecream.numberOfIcecreams})
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Icecream Shop using hooks</h1>
      <h2>No. of icecreams: {numberOfIcecreams}</h2>
      <button onClick={()=>{ dispatch(buyIcecream())}}>Buy Icecream</button>
    </div>
  )
}

export default IcecreamContainerUsingHooks
