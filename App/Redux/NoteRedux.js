import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveDo: ['data'],
  saveSchedule: ['data'],
  saveDelegate: ['data'],
  saveDont: ['data'],

  purge: [],
})

export const NoteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  dos: [],
  schedules: [],
  delegates: [],
  donts: [],
})

/* ------------- Selectors ------------- */

export const NoteSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const saveDo = (state, { data }) => state.merge({ dos: state.dos.concat(data) });

export const saveSchedule = (state, { data }) => state.merge({ schedules: state.schedules.concat(data) });

export const saveDelegate = (state, { data }) => state.merge({ delegates: state.delegates.concat(data) });

export const saveDont = (state, { data }) => state.merge({ donts: state.donts.concat(data) });

export const purge = (state, {}) => {
  return state.merge({ ...INITIAL_STATE });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_DO]: saveDo,
  [Types.SAVE_SCHEDULE]: saveSchedule,
  [Types.SAVE_DELEGATE]: saveDelegate,
  [Types.SAVE_DONT]: saveDont,

  [Types.PURGE]: purge,
})
