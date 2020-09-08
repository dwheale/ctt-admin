import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'

const AppBarComponent = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const useStyles = makeStyles(theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
  }))

  const classes = useStyles()
  return (
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={ handleDrawerToggle }
              className={ classes.menuButton }
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default AppBarComponent