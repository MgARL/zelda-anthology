import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import loadingIMG from '../images/loading_zelda.gif'

function DisplayCategory() {
    let { category } = useParams()
    let navigate = useNavigate()
    let [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`)
                if (response.ok) {
                    let parsedRes = await response.json()
                    if (parsedRes.data.food) {
                        setData(parsedRes.data.food)
                        setData(d => [...d, parsedRes.data.non_food])
                    } else {
                        setData(parsedRes.data)
                    }
                } else {
                    navigate('/404')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [category, navigate])

    const renderData = () => {
        if (data.length > 1) {
            return <Row xs={1} md={2} lg={3} xxl={4} className='g-3'>
                {data.map((item, i) => {
                    return (
                        <Col key={i}>
                            <Card border='primary' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name.toUpperCase()}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button as={Link} variant="primary" to={`/item/${item.id}`}>Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        } else {
            return (
                <Col xs={12} className='d-flex justify-content-center'>
                    <img src={loadingIMG} alt="Loading gif" style={{ height: '150px' }} />
                </Col>
            )
        }
    }

    return (
        <Container>
            <h2>{category.toUpperCase()}</h2>
            {renderData()}
        </Container>

    )
}

export default DisplayCategory