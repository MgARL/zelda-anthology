import React from 'react'
import confusedIMG from '../images/Link_confused.jpg'
import Container from 'react-bootstrap/Container'

function Page404() {
  return (
    <Container>
        <h1>Page Not Found Error code 404</h1>
        <img src={confusedIMG} alt="Confused Link" />
        <p>We are sorry we could find that item or page</p>
    </Container>
  )
}

export default Page404