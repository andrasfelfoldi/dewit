import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveDo: ['data'],
  markDo: ['index'],
  deleteMarkedDos: [],
  
  saveSchedule: ['data'],
  markSchedule: ['index'],
  deleteMarkedSchedules: [],

  saveDelegate: ['data'],
  markDelegate: ['index'],
  deleteMarkedDelegates: [],

  saveEliminate: ['data'],
  markEliminate: ['index'],
  deleteMarkedEliminates: [],

  purge: [],
})

export const NoteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  dos: [],
  schedules: [],
  delegates: [],
  eliminates: [],
})

/* ------------- Selectors ------------- */

export const NoteSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const saveDo = (state, { data }) => state.merge({ dos: state.dos.concat(data) });
export const markDo = (state, { index }) => {

  let newDos = Immutable.asMutable(state.dos, {deep: true});
  newDos[index].isMarkedDone = !newDos[index].isMarkedDone;

  return state.merge({ dos: newDos });
}
export const deleteMarkedDos = (state, {}) => {

  let newDos = [];
  state.dos.forEach(doItem => {
    if(!doItem.isMarkedDone){
      newDos.push(doItem);
    }
  });

  return state.merge({ dos: newDos });
}

export const saveSchedule = (state, { data }) => state.merge({ schedules: state.schedules.concat(data) });
export const markSchedule = (state, { data }) => state.merge({ schedules: state.schedules.concat(data) });
export const deleteMarkedSchedules = (state, { data }) => state.merge({ schedules: state.schedules.concat(data) });

export const saveDelegate = (state, { data }) => state.merge({ delegates: state.delegates.concat(data) });
export const markDelegate = (state, { data }) => state.merge({ delegates: state.delegates.concat(data) });
export const deleteMarkedDelegates = (state, { data }) => state.merge({ delegates: state.delegates.concat(data) });

export const saveEliminate = (state, { data }) => state.merge({ eliminates: state.eliminates.concat(data) });
export const markEliminate = (state, { data }) => state.merge({ eliminates: state.eliminates.concat(data) });
export const deleteMarkedEliminates = (state, { data }) => state.merge({ eliminates: state.eliminates.concat(data) });

export const purge = (state, {}) => {
  return state.merge({ ...INITIAL_STATE });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_DO]: saveDo,
  [Types.MARK_DO]: markDo,
  [Types.DELETE_MARKED_DOS]: deleteMarkedDos,

  [Types.SAVE_SCHEDULE]: saveSchedule,
  [Types.DELETE_MARKED_SCHEDULES]: deleteMarkedSchedules,

  [Types.SAVE_DELEGATE]: saveDelegate,
  [Types.DELETE_MARKED_DELEGATES]: deleteMarkedDelegates,

  [Types.SAVE_ELIMINATE]: saveEliminate,
  [Types.DELETE_MARKED_ELIMINATES]: deleteMarkedEliminates,

  [Types.PURGE]: purge,
})
