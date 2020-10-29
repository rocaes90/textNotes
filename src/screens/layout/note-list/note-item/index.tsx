import React, { memo, useCallback } from 'react'

import { Box, Button } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

import { INote } from 'types'
import { stringUtils } from 'utils'

import useStyles from './note-item.styles'

interface IProps {
  note: INote,
  onClickEdit(item: INote): void 
  onClickDelete(id: number): void
}

function NoteItem({note, onClickEdit, onClickDelete}: IProps) {
  const classes = useStyles()

  const { text } = note

  const onClickEditCallback = useCallback((): void => onClickEdit(note), [
    note,
    onClickEdit,
  ])

  const onClickDeleteCallback = useCallback((): void => onClickDelete(note.id), [
    note,
    onClickDelete,
  ])

  return (
    <Box className={classes.itemContainer}>
      <Box className={classes.content}>
        {stringUtils.excerpt(text, 100)}
      </Box>
      <Box className={classes.options} mr={2}>
        <Box className={classes.optionContainer}>
          <Button
            onClick={onClickEditCallback}
            className={classes.optionButton}
            startIcon={<Edit className={classes.icon} color="inherit" fontSize="small" />}
          >
            Edit
          </Button>
        </Box>
        <Box className={classes.optionContainer} >
          <Button
            onClick={onClickDeleteCallback}
            className={classes.optionButton}
            startIcon={<Delete className={classes.icon} color="inherit" fontSize="small" />}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(NoteItem)
