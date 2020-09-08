import React from 'react'
import defaultTheme from '../../default-theme'
import { makeStyles } from '@material-ui/styles'

const theme = defaultTheme

const useStyles = makeStyles(() => ({
  root: {
    color: theme.palette.primary
  }
}))