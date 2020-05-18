import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Icon, Input } from 'semantic-ui-react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { setSearch, searchForks } from '../actions'
import queryString from 'query-string'
import { throttle, isEmpty } from 'lodash'

export default function Search({ favorites }) {
  const history = useHistory()
  const location = useLocation()
  const parsedQuery = queryString.parse(location.search, { sort: false })
  const search = useSelector(state => state.app.search)
  const [query, setQuery] = useState(null)
  const [searchInvalid, setSearchInvalid] = useState(null)
  const [searchPosition, setSearchPosition] = useState('center')
  const { page } = parsedQuery
  const [prevPage, setPrevPage] = useState(undefined)

  const dispatch = useDispatch()

  useEffect(() => {
    const { owner, repository } = parsedQuery
    if (owner && repository) {
      dispatch(setSearch(owner + '/' + repository))
    } else if (owner) {
      dispatch(setSearch(owner))
    } else { dispatch(setSearch('')) }
  }, [])

  useEffect(() => {
    if (search !== null) {
      if (search === '') {
        setSearchPosition('center')
      } else { setSearchPosition('top') }
      setPrevPage(page)
      const queryObject = {
        owner: '',
        repository: '',
        page: prevPage !== page ? page : undefined
      }
      const data = search.split('/', 2)
      queryObject.owner = data[0] || undefined
      queryObject.repository = data[0] ? data[1] || undefined : undefined
      setQuery(queryObject)
    }
  }, [search, parsedQuery.page])

  useEffect(() => {
    if (query !== null) {
      const string = queryString.stringify(query, { sort: false })
      history.replace('/search?' + string)
      if (!searchInvalid) throttledQuery(string)
    }
  }, [query])

  const throttledQuery = useRef(throttle((q) =>
    dispatch(searchForks(q))
  ,1300, { leading: false, trailing: true })).current


  const changeInput = ({ target: { value }}) => {
    dispatch(setSearch(value.replace(/\s/g,'')))
    const data = value.split('/', 3)
    if ((data[0].length === 0 && data.length === 2) || data.length === 3) {
      setSearchInvalid(true)
    } else { setSearchInvalid(false)}
  }

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: searchPosition === 'center' ? '100vh' : '160px',
    transition: '0.5s'
  }

  return (
    <div style={divStyle}>
      <Container textAlign='center' style={{ position: 'relative' }}>
        <p style={{visibility: searchInvalid ? 'visible': 'hidden', color: '#DA7477'}}>Invalid format</p>
        <Input
          error={ searchInvalid }
          icon='github'
          size='big'
          iconPosition='left'
          placeholder='Search forks'
          style={{ width: '30%', marginBottom: '.3rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 9px 0px' }}
          value={ search || '' }
          onChange={ changeInput }
        />
        <p>Please use format: <strong>owner/repositoryName</strong></p>
        <div
          style={{
            position: 'absolute',
            right: '13%',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: !isEmpty(favorites) ? 'pointer' : 'auto'
          }}
        >
          { !isEmpty(favorites) ?
              <Link to='/favorites'>
                <Icon size='big' name='star' color='yellow'/>
              </Link>
            : <Icon size='big' name='star outline' color='yellow'/>
          }
        </div>
      </Container>
    </div>
  )
}


