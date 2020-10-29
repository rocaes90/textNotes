import { makeStyles, StyleRules, Theme } from '@material-ui/core'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    homeContainer: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      [theme.breakpoints.up('md')]: {
        overflow: 'hidden',
      }
    },
    homeContent: {
      display: 'flex'
    }
  }),
)

export default useStyles
