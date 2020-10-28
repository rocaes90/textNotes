import React, { memo } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import { INote } from 'types'

import Item from './note-item'
import useStyles from './note-list.styles'
import useNoteList from './note-list.hook'

interface IProps {
  notesToDisplay: INote[]
}

function NoteList({notesToDisplay}: IProps) {
  const classes = useStyles()

  const { onClickEdit, onClickDelete, onClickAdd } = useNoteList()

  return (
    <Box className={classes.listContainer}>
      <Button
        variant="contained"
        className={classes.createNewButton}
        startIcon={<Add />}
        onClick={onClickAdd}
      >
        Create new note
      </Button>
      <Box className={classes.titleContainer}>
        <Typography variant='h4'>Notes</Typography>
      </Box>
      <Box className={classes.notesContainer}>
        {notesToDisplay.map( note => {
          return <Item key={note.id} note={note} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
        } )}
        </Box>
    </Box>
  )
}

export default memo(NoteList)
