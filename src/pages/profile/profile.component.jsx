import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

const Profile = (currentUser) => {
  return (
      <div>
        <Typography variant='h3'>
          User Profile
        </Typography>

      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Profile)