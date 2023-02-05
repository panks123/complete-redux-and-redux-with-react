import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function FetchUsersContainer({ usersData, fetchUsers }) {
  // dispatch the action in useEffect
  useEffect(()=>{
    fetchUsers()
    // eslint-disable-next-line
  }, [])
  return (
    usersData.loading ? <h2>Loading...</h2> : 
    usersData.error ? <h2>Error occurred: {usersData.error}</h2> :
    (
      <div>
        <h1>Users list:</h1>
        <div>
          {
            usersData && usersData.users && usersData.users.map((user)=>{
                return (<p key={user.id}>{user.name}</p>)
            })
          }
        </div>
      </div>
    )
  )
}

const mapStateToProps =(state)=>{
  return {
    usersData: state.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchUsers: ()=>{
      dispatch(fetchUser())
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(FetchUsersContainer)
