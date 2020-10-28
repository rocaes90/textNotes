import { makeStyles, StyleRules, Theme } from '@material-ui/core'

import { Colors } from 'config'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    listContainer: {
      paddingTop: theme.spacing(2)
    },
    titleContainer: {
      width: '100%',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    createNewButton: {
      backgroundColor: Colors.white,
    },
    notesContainer: {
      '& > div:nth-child(even)': {
        backgroundColor: Colors.stormGray,
      }
    }
  }),
)

export default useStyles
