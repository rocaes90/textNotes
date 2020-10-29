import { useCallback, useContext } from 'react'

import { INote } from 'types'
import ActiveNoteContext from 'context/activeNote'

interface IType {
  onClickEdit(item: INote): void 
  onClickDelete(id: number): void 
  onClickAdd(): void
}

function useNoteList(): IType {

  const [ context, setContext ] = useContext(ActiveNoteContext)

  const onClickEdit = useCallback(
    (item): void => {
      const updatedContext = {...context, selectedNote: item, currentText: item.text }
      setContext(updatedContext) 
    }, 
    [context, setContext]
  )

  const onClickDelete = useCallback(
    (id): void => {
      const { notes } = context
      const filteredNotes = notes.filter((note: INote) => note.id !== id)
      const updatedContext = {...context, notes: filteredNotes }
      localStorage.setItem('notes', JSON.stringify(updatedContext))
      setContext(updatedContext) 
    }, 
    [context, setContext]
  )

  const onClickAdd = useCallback(
    (): void => {
      const updatedContext = {...context, selectedNote: null, currentText: '' }
      setContext(updatedContext) 
    }, 
    [context, setContext]
  )

  return {
    onClickEdit,
    onClickDelete,
    onClickAdd,
  }
}

export default useNoteList
