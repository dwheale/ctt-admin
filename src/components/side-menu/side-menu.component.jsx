import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import sideMenuItems from './side-menu-items'
import SideMenuItem from './side-menu-item.component'
import Divider from '@material-ui/core/Divider'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { signOutStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import './side-menu.styles.scss'
import Drawer from '@material-ui/core/Drawer'

const drawerWidth = 240

const useStyles = makeStyles(theme =>
    createStyles({
      sideMenu: {
        width: '100%',
      },
      navList: {
        width: drawerWidth,
      },
      menuItem: {
        width: drawerWidth,
      },
      menuItemIcon: {
        color: '#97c05c',
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#535454',
        color: '#fff',
      },
    }),
)

const SideMenu = ({ signOutStart }) => {
  const classes = useStyles()

  return (
      <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
      >
        <div className='side-menu'>
          <List component="nav" className={classes.sideMenu} disablePadding>
            <Divider />
            {sideMenuItems.map((item, index) => (
                <SideMenuItem {...item} key={index} />
            ))}
            <Divider />
            <ListItem button className={classes.menuItem} onClick={signOutStart}>
              <ListItemIcon className={classes.menuItemIcon}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem>
          </List>
        </div>
      </Drawer>
  )
}

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(null, mapDispatchToProps)(SideMenu)