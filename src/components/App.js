import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/sign-in/sign-in.component'
import { checkUserSession } from '../redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser, selectIsUserLoading } from '../redux/user/user.selector'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import SideMenu from './side-menu/side-menu.component'
import PrivateRoute from './private-route/private-route.component'
import LoadingSpinner from './loading-spinner/loading-spinner.component'
import Orderboard from '../pages/orderboard/orderboard.component'
import Dashboard from '../pages/dashboard/dashboard.component'
import Profile from '../pages/profile/profile.component'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function App({ checkUserSession, currentUser, isUserLoading }) {
  const classes = useStyles()

  useEffect( () => {
    checkUserSession()
  }, [checkUserSession])

  return (
      <div className={ classes.root }>
        <CssBaseline />
        {
          isUserLoading ? (
            <LoadingSpinner />
          ) : currentUser ? (
              <SideMenu />
          ) : null
        }

        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path='/' render={() => currentUser ? <Redirect to='/dashboard' /> : <Redirect to='/signin' /> } />
              <Route path='/signin' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignIn />} />
              <PrivateRoute path='/orders' component={Orderboard} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/organization-profile' component={Profile} />
            </Switch>
          </Container>
        </main>
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isUserLoading: selectIsUserLoading,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)