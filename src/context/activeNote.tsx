import React from 'react'

const ActiveNoteContext = React.createContext<any>(null)

export const ActiveNoteProvider = ActiveNoteContext.Provider
export const ActiveNoteConsumer = ActiveNoteContext.Consumer

export default ActiveNoteContext