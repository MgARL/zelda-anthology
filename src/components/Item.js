import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import loadingIMG from '../images/loading_zelda.gif'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// my comps
import MoreInfo from './MoreInfo'

function Item() {
    const { item } = useParams()
    const navigate = useNavigate()
    let [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${item}`)
                if (response.ok) {
                    let parsedRes = await response.json()
                    setData(parsedRes.data)
                } else {
                    navigate('/404')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [item, navigate])

    const renderItem = () => {
        if (data.name) {
            return (
                <div className='bg1 col-md-8'>
                    <h1>{data.name.toUpperCase()}</h1>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12} md={4}>
                            <h4>ID No: {data.id}</h4>
                        </Col>
                    </Row>
                    <img src={data.image} alt={data.name} />
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12} md={6}>
                            {data.description}
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col xs={12}>
                            <h3>More Information:</h3>
                        </Col>
                    </Row>
                    <MoreInfo data={data}/>
                    <Row className='d-flex justify-content-center m-2'>
                        <Col xs={4} lg={2} className='d-flex justify-content-center'>
                            <Button as={Link} to={`/item/${Number(data.id - 1)}`} variant='success' className='d-flex align-items-center'>
                                Previous Item
                            </Button>
                        </Col>
                        <Col xs={4} lg={2} className='d-flex justify-content-center'>
                            <Button as={Link} to="/" variant='success' className='d-flex align-items-center'>
                                Home
                            </Button>
                        </Col>
                        <Col xs={4} lg={2} className='d-flex justify-content-center'>
                            <Button as={Link} to={`/item/${Number(data.id) + 1}`} variant='success' className='d-flex align-items-center'>
                                Next Item
                            </Button>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return <img src={loadingIMG} alt="Loading gif" style={{ height: '150px' }} />
        }
    }


    return (
        <Container className='my-5 fill-page d-flex justify-content-center align-items-center'>
            {renderItem()}
        </Container>
    )
}

export default Item