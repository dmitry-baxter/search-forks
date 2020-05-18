import React from 'react'
import Search from "../components/search"
import { Container } from "semantic-ui-react"
import ForksTable from '../components/forksTable'

export default function Home(props) {
  return (
    <Container style={{height: '100%'}}>
      <Search favorites={ props.favorites }/>
      <ForksTable { ...props }/>
    </Container>
  )
}


