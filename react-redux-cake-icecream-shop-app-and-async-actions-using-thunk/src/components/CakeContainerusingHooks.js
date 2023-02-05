import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainerusingHooks() {

    const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes)
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Cake Shop using hooks</h1>
      <h2>No. of cakes: {numberOfCakes}</h2>
      <button onClick={()=>{ dispatch(buyCake())}}>Buy cake</button>
    </div>
  )
}

export default CakeContainerusingHooks
