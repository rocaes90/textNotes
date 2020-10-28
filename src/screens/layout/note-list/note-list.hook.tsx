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
      // const { notes } = context
      const updatedContext = {...context, selectedNote: item, currentText: item.text }
      setContext(updatedContext) 
    }, 
    [context]
  )

  const onClickDelete = useCallback(
    (id): void => {
      const { notes } = context

      console.log('click on delete', id)
      console.log('notes', notes)

      const filteredNotes = notes.filter((note: INote) => note.id !== id)

      const updatedContext = {...context, notes: filteredNotes }
      setContext(updatedContext) 

    }, 
    [context]
  )

  const onClickAdd = useCallback(
    (): void => {
      // const { notes } = context
      const updatedContext = {...context, selectedNote: null, currentText: '' }
      setContext(updatedContext) 
    }, 
    [context]
  )

  return {
    onClickEdit,
    onClickDelete,
    onClickAdd,
  }
}

export default useNoteList
