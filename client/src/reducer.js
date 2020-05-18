const initialState = {
  userId: null,
  search: null,
  loading: true,
  forks: {
    list: [],
    pages: 0
  },
  error: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload
      }
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'SET_FORKS':
      return {
        ...state,
        forks: {
          list: action.payload.data,
          pages: action.payload.pages
        },
        loading: false
      }
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        forks: initialState.forks,
        error: action.payload
      }
    default: return state
  }
}
