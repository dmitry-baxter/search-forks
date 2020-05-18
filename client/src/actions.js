import { fetchForks } from './api'


export const setUserId = value => dispatch => {
  dispatch({ type: 'SET_USER_ID', payload: value })
}

export const setSearch = value => dispatch => {
  dispatch({ type: 'SET_SEARCH', payload: value })
}

export const searchForks = query => async dispatch => {
  if (query) {
    dispatch({ type: 'SET_LOADING' })
    const forks = await fetchForks(query)
    if (forks.status === 'success') {
      dispatch({
        type: 'SET_FORKS',
        payload: forks
      })
    } else {
      dispatch({
        type: 'SET_ERROR',
        payload: forks.message
      })
    }
  }
}

export const favoriteFork = (userId, fork) => (dispatch, getState, getFirebase) => {
  if (userId && fork) {
    const firebase = getFirebase()
    firebase.set(`/users/${ userId }/favorites/${ fork.id }`, fork)
  }
}

export const unfavoriteFork = (userId, id) => (dispatch, getState, getFirebase) => {
  if (userId && id) {
    const firebase = getFirebase()
    firebase.set(`/users/${ userId }/favorites/${ id }`, null)
  }
}


