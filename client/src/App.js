import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Home from "./pages/Home"
import { useDispatch, useSelector } from 'react-redux'
import { setUserId } from './actions'
import { useFirebaseConnect } from 'react-redux-firebase'
import Favorites from './pages/Favorites'

export default function App() {
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')

  useFirebaseConnect(`users/${ userId }/favorites`)

  const { data: fbData } = useSelector(state => state.firebase)
  const { search, loading, forks, error } = useSelector(state => state.app)
  const favorites = (fbData.users && fbData.users[userId].favorites) || {}

  useEffect(() => {
    const id = uuidv4()
    if (!userId) localStorage.setItem('userId', id)
    dispatch(setUserId(userId || id))
  }, [])

  return (
    <div>
      <Container>
        <Switch>
          <Route path='/search'>
            <Home search={ search } loading={ loading } forks={ forks } error={ error } favorites={ favorites }/>
          </Route>
          <Route path='/favorites'>
            <Favorites favorites={ favorites }/>
          </Route>
          <Redirect from='*' to='/search'/>
        </Switch>
      </Container>
    </div>
  )
}

