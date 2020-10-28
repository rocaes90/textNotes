import React, { memo, ReactElement } from 'react'

import { Box } from '@material-ui/core'

import List from './note-list'
import useStyles from './layout.styles'
import useLayout from './layout-hook'

import { ActiveNoteProvider } from 'context/activeNote'

interface IProps { 
  children: ReactElement
}

function Layout({ children }: IProps) {
  const classes = useStyles()

  const { notesToDisplay } = useLayout()

  return (
    <Box className={classes.layoutContainer}>
      <Box className={classes.noteListContainer}>
        <List 
          notesToDisplay={notesToDisplay}
        />
      </Box>
      <Box className={classes.layoutContent}>
        {children}
      </Box>
    </Box>
  )
}

export default memo(Layout)