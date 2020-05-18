import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Container, Table, Loader, Pagination, Icon } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { favoriteFork, unfavoriteFork } from '../actions'

export default function ForksTable({ search, loading, forks, error, favorites }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const parsedQuery = queryString.parse(location.search, { sort: false })
  const page = parsedQuery.page ? parseInt(parsedQuery.page) : null
  const { userId } = useSelector(state => state.app)

  useEffect(() => {
    if (!loading) {
      if (!forks.list.length) {
        setPage(undefined)
      } else if (isNaN(page) || (page && (page > forks.pages || page < 1))) {
        setPage(1)
      }
    }
  }, [page, forks])

  const setPage = number => {
    history.replace('/search?' + queryString.stringify({ ...parsedQuery, page: number }, { sort: false }))
  }

  const pageChange = (e, data) => {
    setPage(data.activePage)
  }

  const favorite = fork => dispatch(favoriteFork(userId, fork))

  const unfavorite = id => dispatch(unfavoriteFork(userId, id))


  return (
    <Container textAlign='center' style={{ marginTop: '3rem', width: '80%' }}>
      {
        !loading ?
          forks.list.length ?
            <Table celled selectable textAlign='center' style={{ margin: '0 auto 6rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 18px 0px' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Repository Name</Table.HeaderCell>
                  <Table.HeaderCell>Owner</Table.HeaderCell>
                  <Table.HeaderCell>Stars</Table.HeaderCell>
                  <Table.HeaderCell>Link</Table.HeaderCell>
                  <Table.HeaderCell>Favorite</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                { forks.list.map(item => {
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
                          onClick={ () => favorites[item.id] ?
                            unfavorite(item.id) :
                            favorite(item) }
                        />
                      </Table.Cell>
                    </Table.Row>
                  )
                })
                }
              </Table.Body>
              { forks.pages > 1 &&
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                      <Pagination
                        totalPages={ forks.pages }
                        pointing
                        secondary
                        firstItem={ null }
                        lastItem={ null }
                        activePage={ page || 1 }
                        onPageChange={ pageChange }
                      />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              }
            </Table>
            : search && <h2 style={ { marginTop: '10rem' } }>{ error || 'Nothing found' }</h2>
          : search && <Loader active inline='centered' size='large' style={ { marginTop: '10rem' } }/>
      }
    </Container>
  )
}
