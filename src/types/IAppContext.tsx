import { Note } from './INote'

export interface AppContext {
  currentText: string,
  selectedNote: Note,
  notes: Note[],
}
