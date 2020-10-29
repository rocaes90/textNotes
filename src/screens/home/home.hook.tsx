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
    return (maintainerFunction: any) => {
      const updatedContext = maintainerFunction(context)
      setContext(updatedContext) 
      localStorage.setItem('notes', JSON.stringify(updatedContext))
    }
  }

  const updateNote = useCallback(({notes, currentText, selectedNote}: IAppContext) => {
    const noteIndexToUpdate = notes.findIndex((note: INote) => note.id === selectedNote.id)
    notes[noteIndexToUpdate].text = currentText
    return { 
      ...context, 
      notes,
      currentText: '',
      selectedNote: null,
    }
  }, [context])

  const addNote = useCallback(({notes, currentText, selectedNote}: IAppContext) => {
    const lastId = notes.length && notes.slice(-1)[0]['id']

    return{ 
      ...context, 
      notes: [...notes].concat({ id: lastId + 1, text: currentText }),
      currentText: ''
    }
  }, [context])

  const maintenanceNotes = contextMaintenanceNotes()

  const onChangeText = useCallback(
    (event: ChangeEvent<any>): void => {

      const { value } = event.target

      const updatedContext = { ...context, ...{currentText: value}}
      setContext(updatedContext) 
    }, 
    [context, setContext]
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
    [context, addNote, updateNote, maintenanceNotes]
  )

  const onKeyPressed = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        event.preventDefault()
        const { selectedNote, currentText } = context
        if (selectedNote) {
          maintenanceNotes(updateNote)
        } else if(currentText) {
          maintenanceNotes(addNote)
        }
      }
    }, 
    [context, addNote, updateNote, maintenanceNotes]
  )

  useEffect(() => {
    const activeText = context.currentText ? context.currentText : ''
    setCurrentText(activeText)
  }, [context])

  return { 
    currentText,
    onChangeText,
    onClickSave,
    onKeyPressed,
  }
}

export default useHome
