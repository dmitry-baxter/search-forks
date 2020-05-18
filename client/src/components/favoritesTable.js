import React, { useState } from 'react'
import { Container, Table, Loader, Icon, Modal, Header, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { favoriteFork, unfavoriteFork } from '../actions'
import { values } from 'lodash'

export default function FavoriteTable({ favorites }) {
  const dispatch = useDispatch()
  const { userId } = useSelector(state => state.app)
  const [showModal, setShowModal] = useState(false)
  const [forkToUnfavorite, setForkToUnfavorite] = useState('')

  const unfavorite = id => {
    toggleModal(false)
    dispatch(unfavoriteFork(userId, id))
  }

  const toggleModal = value => {
    setShowModal(value)
  }

  return (
    <Container textAlign='center' style={{ marginTop: '3rem', width: '80%' }}>
      {
        values(favorites).length ?
          <Table celled selectable textAlign='center' style={{ margin: '0 auto 6rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 18px 0px' }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Repository Name</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
                <Table.HeaderCell>Stars</Table.HeaderCell>
                <Table.HeaderCell>Link</Table.HeaderCell>
                <Table.HeaderCell>Unfavorite</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { values(favorites).sort((el, el2) => el2.stars - el.stars).map(item => {
                return (
                  <Table.Row key={ item.id }>
                    <Table.Cell>{ item.repositoryName }</Table.Cell>
                    <Table.Cell>{ item.owner }</Table.Cell>
                    <Table.Cell>
                      <Icon name='star' color='yellow'/>
                      { item.stars }
                    </Table.Cell>
                    <Table.Cell>
                      <a href={ item.link } target='_blank'>{ item.link }</a>
                    </Table.Cell>
                    <Table.Cell>
                      <Icon
                        name={ favorites[item.id] ? 'star' : 'star outline' }
                        size='large'
                        color='yellow'
                        style={{ cursor: 'pointer' }}
                        onClick={ () => {
                          setForkToUnfavorite(item.id)
                          toggleModal(true)
                        }}
                      />
                    </Table.Cell>
                  </Table.Row>
                )
              })
              }
            </Table.Body>
          </Table>
          : <h2 style={{ marginTop: '10rem' }}>No favorites</h2>
      }
      <Modal basic size='small' open={showModal}>
        <Header icon='star outline' content='Unfavorite'/>
        <Modal.Content>
          <p>
            Are you sure you want to remove this fork from your favorites list?<br/>
            The author of this fork will be very sad :(
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={ () => toggleModal(false) }>
            <Icon name='remove'/> No
          </Button>
          <Button color='green' inverted onClick={ () => unfavorite(forkToUnfavorite) }>
            <Icon name='checkmark'/> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  )
}
