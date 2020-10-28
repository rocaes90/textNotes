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
      width: '40%'
    },
    layoutContent: {
      width: '60%'
    }
  }),
)

export default useStyles
