import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import firebase from 'firebase/app'
import 'firebase/database'
import { ReactReduxFirebaseProvider, getFirebase, firebaseReducer } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const fbConfig = {
  apiKey: "AIzaSyBIol2omNU3GQQxOxGFO1FTpF-uiuEbnNY",
  authDomain: "search-forks.firebaseapp.com",
  databaseURL: "https://search-forks.firebaseio.com",
  projectId: "search-forks",
  storageBucket: "search-forks.appspot.com",
  messagingSenderId: "868379333449",
  appId: "1:868379333449:web:907733210322b051610098"
}
const rfConfig = {}

firebase.initializeApp(fbConfig)

const store = createStore(combineReducers({
  app: Reducer,
  firebase: firebaseReducer
}), process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getFirebase)))
  : applyMiddleware(thunk.withExtraArgument(getFirebase))
)

ReactDOM.render(
  <Provider store={ store }>
    <ReactReduxFirebaseProvider
      firebase={ firebase }
      config={ rfConfig }
      dispatch={ store.dispatch }
    >
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
, document.getElementById('root'))
