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


// DO
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

// SCHEDULE
export const saveSchedule = (state, { data }) => state.merge({ schedules: state.schedules.concat(data) });
export const markSchedule = (state, { index }) => {

  let newSchedules = Immutable.asMutable(state.schedules, {deep: true});
  newSchedules[index].isMarkedDone = !newSchedules[index].isMarkedDone;

  return state.merge({ schedules: newSchedules });
}
export const deleteMarkedSchedules = (state, {}) => {

  let newSchedules = [];
  state.schedules.forEach(doItem => {
    if(!doItem.isMarkedDone){
      newSchedules.push(doItem);
    }
  });

  return state.merge({ schedules: newSchedules });
}

// DELEGATE
export const saveDelegate = (state, { data }) => state.merge({ delegates: state.delegates.concat(data) });
export const markDelegate = (state, { index }) => {

  let newDelegates = Immutable.asMutable(state.delegates, {deep: true});
  newDelegates[index].isMarkedDone = !newDelegates[index].isMarkedDone;

  return state.merge({ delegates: newDelegates });
}
export const deleteMarkedDelegates = (state, {}) => {

  let newDelegates = [];
  state.delegates.forEach(doItem => {
    if(!doItem.isMarkedDone){
      newDelegates.push(doItem);
    }
  });

  return state.merge({ delegates: newDelegates });
}

// ELIMINATE
export const saveEliminate = (state, { data }) => state.merge({ eliminates: state.eliminates.concat(data) });
export const markEliminate = (state, { index }) => {

  let newEliminates = Immutable.asMutable(state.eliminates, {deep: true});
  newEliminates[index].isMarkedDone = !newEliminates[index].isMarkedDone;

  return state.merge({ eliminates: newEliminates });
}
export const deleteMarkedEliminates = (state, {}) => {

  let newEliminates = [];
  state.eliminates.forEach(doItem => {
    if(!doItem.isMarkedDone){
      newEliminates.push(doItem);
    }
  });

  return state.merge({ eliminates: newEliminates });
}

// PURGE
export const purge = (state, {}) => {
  return state.merge({ ...INITIAL_STATE });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_DO]: saveDo,
  [Types.MARK_DO]: markDo,
  [Types.DELETE_MARKED_DOS]: deleteMarkedDos,

  [Types.SAVE_SCHEDULE]: saveSchedule,
  [Types.MARK_SCHEDULE]: markSchedule,
  [Types.DELETE_MARKED_SCHEDULES]: deleteMarkedSchedules,

  [Types.SAVE_DELEGATE]: saveDelegate,
  [Types.MARK_DELEGATE]: markDelegate,
  [Types.DELETE_MARKED_DELEGATES]: deleteMarkedDelegates,

  [Types.SAVE_ELIMINATE]: saveEliminate,
  [Types.MARK_ELIMINATE]: markEliminate,
  [Types.DELETE_MARKED_ELIMINATES]: deleteMarkedEliminates,

  [Types.PURGE]: purge,
})
