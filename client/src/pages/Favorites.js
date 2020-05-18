import React, { useEffect } from 'react'
import { Container, Header, Icon } from "semantic-ui-react"
import ForksTable from '../components/forksTable'
import { useHistory } from 'react-router-dom'
import FavoriteTable from '../components/favoritesTable'
import { useDispatch } from 'react-redux'

export default function Favorites(props) {
  const dispatch = useDispatch()
  const history = useHistory()

  // useEffect(() => {
  //   dispatch({
  //     type: 'SET_FORKS',
  //     payload: { data: [], pages: 0 }
  //   })
  // }, [])

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '160px'
  }

  return (
    <Container style={{height: '100%'}}>
      <div style={divStyle}>
        <Container textAlign='center'>
          <Header as='h3' onClick={ () => history.goBack() } style={{ cursor: 'pointer' }}>
            <Icon name='arrow left' style={{ fontSize: '1em', lineHeight: '0.7em' }}/>
            Search
          </Header>
        </Container>
      </div>
      <FavoriteTable { ...props }/>
    </Container>
  )
}
