import { makeStyles, StyleRules, Theme } from '@material-ui/core'

import { Colors } from 'config'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    layoutContainer: {
      display: 'flex',
      width: '100%'
    },
    noteListContainer: {
      backgroundColor: Colors.background,
      [theme.breakpoints.down('sm')]: {
        width: 'auto'
      },
      [theme.breakpoints.up('md')]: {
        overflow: 'auto',
        width: '40%'
      },
    },
    layoutContent: {
      [theme.breakpoints.down('sm')]: {
        width: 'auto'
      },
      [theme.breakpoints.up('md')]: {
        width: '60%'
      },
    }
  }),
)

export default useStyles
