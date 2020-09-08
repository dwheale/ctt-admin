import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ currentUser, component: Component, ...otherProps }) => {

  return (
      // Uncomment these to reenable protected routes
      // <Route {...otherProps} render={(props) => (
      //     currentUser
      //         ? <Component {...props} />
      //         : <Redirect to='/signin' />
      // )} />
      <Route { ...otherProps } render={(props) => (
          <Component {...props} />
      )} />
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(PrivateRoute)