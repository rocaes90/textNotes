import React, { useState } from 'react';

import Home from './screens/home'

import './App.css';

import { ActiveNoteProvider } from 'context/activeNote'
import { INote } from 'types';

function App() {
  
  const activeNote: INote = { id: 0, text: ''}
  const localStorageNotes = localStorage.getItem('notes')

  
  const notesInLocalStorage = localStorageNotes 
  ? JSON.parse(localStorageNotes) 
  : { activeNote: activeNote, notes: [] }
  
  const [context, setContext] = useState(notesInLocalStorage)

  return (
    <ActiveNoteProvider value={[context, setContext]}>
      <div className="App">
        <Home />
      </div>
    </ActiveNoteProvider>
  );
}

export default App;
