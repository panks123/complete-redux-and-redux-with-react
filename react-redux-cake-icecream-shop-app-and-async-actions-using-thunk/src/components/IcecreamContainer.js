import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'

function IcecreamContainer(props) {
  return (
    <div>
        <h1>Icecream Shop</h1>
        <h2>Number of icecreams: {props.numberOfIcecreams}</h2>
        <button onClick={props.buyIcecream}> Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        numberOfIcecreams: state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyIcecream: ()=>{
            dispatch(buyIcecream())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)
