import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../../redux/user/user.selector'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  typography: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const ProfileMenu = ({ currentUser }) => {
  const classes = useStyles()
  const[open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <div className={classes.root}>
          <Button
            ref={anchorRef}
            aria-controls={open? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            >
            <Typography className={classes.typography}>
              { currentUser.email }
              <ArrowDropDownIcon />
            </Typography>

          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
            )}
          </Popper>
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(ProfileMenu)