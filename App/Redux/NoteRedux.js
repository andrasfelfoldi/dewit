import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveNote: ['noteData'],
})

export const NoteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  notes: [],
})

/* ------------- Selectors ------------- */

export const NoteSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const saveNote = (state, { noteData }) => {
  let notes = state.notes === null ? [] : state.notes.slice();
  notes.push(noteData);
  return state.merge({ notes });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_NOTE]: saveNote,
})
