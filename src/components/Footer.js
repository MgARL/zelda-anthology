import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import twitterIcon from '../images/icons8-twitter-100.png'
import linkedinIcon from '../images/icons8-linkedin-48.png'
import githubIcon from '../images/icons8-github-48.png'
import triForce from '../images/triforce.png'


function Footer({ logo, Link }) {
    return (
        <Container fluid className='d-flex flex-column align-items-center  bg1'>
            <Row>
                <Col xs={12}className='d-flex justify-content-center'>
                    <Link to='/' className='d-flex align-items-center justify-content-center text-dark' style={{ textDecoration: 'none' }}>
                        <img src={triForce} alt='The Triforce' height='50' className='pb-2 me-2' /><h3 className='hover-link'>Zelda Anthology</h3>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="d-flex justify-content-center mb-4">
                    <a href="https://twitter.com/mgarl22" target='_blank' rel="noreferrer" className="px-2">
                        <img src={twitterIcon} alt="Twitter" width="50" height="50" />
                    </a>
                    <a href="https://github.com/MgARL" target='_blank' rel="noreferrer" className="px-2">
                        <img src={githubIcon} alt="Github" width="50" height="50" />
                    </a>
                    <a href="https://www.linkedin.com/in/miguel-rod-developer/" target='_blank' rel="noreferrer" className="px-2">
                        <img src={linkedinIcon} alt="Linkedin" width="50" height="50" />
                    </a>
                </Col>
            </Row>
            <Row className="pb-4">
                <Col xs={12} className='d-flex justify-content-center'>
                    <a href="https://www.linkedin.com/in/miguel-rod-developer/" target='_blank' rel="noreferrer" className="badge badge-secondary text-dark">Created by: Miguel R.</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer