import { ChangeEvent, KeyboardEvent, useCallback, useContext, useEffect, useState } from 'react'

import { IAppContext, INote } from 'types'

import ActiveNoteContext from 'context/activeNote'

interface IType {
  currentText: string,
  onChangeText(event: ChangeEvent<any>): void
  onClickSave(): void
  onKeyPressed(event: KeyboardEvent<HTMLDivElement>): void
}

function useHome(): IType {

  const [ context, setContext ] = useContext(ActiveNoteContext)

  const [currentText, setCurrentText] = useState('')

  const contextMaintenanceNotes = function() {
    const { notes, currentText, selectedNote } = context
    return (maintainerFunction: any) => {
      const updatedContext = maintainerFunction(context)
      setContext(updatedContext) 
      localStorage.setItem('notes', JSON.stringify(updatedContext))
    }
  }

  const updateNote = ({notes, currentText, selectedNote}: IAppContext) => {
    const noteIndexToUpdate = notes.findIndex((note: INote) => note.id === selectedNote.id)
    notes[noteIndexToUpdate].text = currentText
    return { 
      ...context, 
      notes,
      currentText: '',
      selectedNote: null,
    }
  }

  const addNote = ({notes, currentText, selectedNote}: IAppContext) => {
    return{ 
      ...context, 
      notes: [...notes].concat({ id: notes.length + 1, text: currentText }),
      currentText: ''
    }
  }

  const maintenanceNotes = contextMaintenanceNotes()

  const onChangeText = useCallback(
    (event: ChangeEvent<any>): void => {

      const { name, value } = event.target

      const updatedContext = { ...context, ...{currentText: value}}
      setContext(updatedContext) 
    }, 
    [context]
  )

  const onClickSave = useCallback(
    () => {
      const { selectedNote } = context
      if (selectedNote) {
        maintenanceNotes(updateNote)
      } else {
        maintenanceNotes(addNote)
      }
    },
    [context]
  )

  const onKeyPressed = useCallback(
    (event: KeyboardEvent): void => {
      console.log('keypress', event.key)
      if (event.key === 'Enter') {
        event.preventDefault()
        const { selectedNote } = context
        if (selectedNote) {
          maintenanceNotes(updateNote)
        } else {
          maintenanceNotes(addNote)
        }
      }
    }, 
    [context] 
  )

  useEffect(() => {
    const activeNote = context.currentText ? context.currentText : ''
    setCurrentText(activeNote)
  }, [context])

  return { 
    currentText,
    onChangeText,
    onClickSave,
    onKeyPressed,
  }
}

export default useHome
