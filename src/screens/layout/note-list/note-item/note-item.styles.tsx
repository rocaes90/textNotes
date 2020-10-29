import { makeStyles, StyleRules, Theme } from '@material-ui/core'

import { Colors } from 'config'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    itemContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      alignItems: 'center'
    },
    content: {
      fontSize: '16px',
      textAlign: 'start'
    },
    options: {
      marginLeft: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column'
    },
    optionContainer: {
      display: 'flex',
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
      cursor: 'pointer'
    },
    optionButton: {
      color: Colors.white
    },
    icon: {
      marginRight: theme.spacing(1)
    }
  }),
)

export default useStyles
