import { makeStyles, StyleRules, Theme } from '@material-ui/core'

import { Colors } from 'config'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    saveButtonContainer: {
      paddingTop: theme.spacing(2),
      justifyContent: 'flex-end'
    },
    saveButton: {
      backgroundColor: Colors.stormGray,
      color: Colors.white
    },
  }),
)

export default useStyles
