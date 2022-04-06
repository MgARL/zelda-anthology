import React from 'react'
import confusedIMG from '../images/Link_confused.png'
import Container from 'react-bootstrap/Container'

function Page404() {
  return (
    <Container className='fill-page mt-5 bg1'>
        <h1>Page Not Found Error code 404</h1>
        <img src={confusedIMG} alt="Confused Link" />
        <p>We are sorry we couldn't find that item or page</p>
    </Container>
  )
}

export default Page404