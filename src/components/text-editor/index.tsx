import React, { ChangeEvent, KeyboardEvent, memo } from 'react'

import { Box, Button, TextField } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import useStyles from './text-editor.styles'

interface IProps {
  currentText: string

  onChangeText(event: ChangeEvent<any>): void
  onClickSave(): void
  onKeyPressed(event: KeyboardEvent<HTMLDivElement>): void
}

function Editor({currentText, onChangeText, onClickSave, onKeyPressed}: IProps) {
  const classes = useStyles()

  return (
    <Box p={5} width='100%' display='flex' flexDirection='column'>
      <TextField
        id="editor"
        multiline
        rows={20}
        variant="outlined"
        fullWidth
        value={currentText}
        onChange={onChangeText}
        onKeyPress={onKeyPressed}
      />
      <Box display="flex" mt={2} className={classes.saveButtonContainer}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={onClickSave}
          className={classes.saveButton}
          disabled={!currentText}
          >
          Save note
        </Button>
      </Box>
    </Box>
  )
}

export default memo(Editor)
