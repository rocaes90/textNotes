import { useContext, useEffect, useState } from 'react'

import { INote } from 'types'
import ActiveNoteContext from 'context/activeNote'

interface IType {
  notesToDisplay: INote[]
}

function useLayout(): IType {

  const [ context ] = useContext(ActiveNoteContext)
  const [ notesToDisplay, setNotesToDisplay ] = useState<INote[]>([])

  useEffect(() => {
    const { notes } = context
    setNotesToDisplay(notes)
  }, [context])

  return {
    notesToDisplay,
  }
}

export default useLayout
