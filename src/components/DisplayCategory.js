import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import loadingIMG from '../images/loading_zelda.gif'
import Pagination from './PaginationNums'

function DisplayCategory() {
    let { category } = useParams()
    let navigate = useNavigate()
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`)
                if (response.ok) {
                    let parsedRes = await response.json()
                    if (parsedRes.data.food) {
                        let creaturesArr = parsedRes.data.food.concat(parsedRes.data.non_food)

                        setData(creaturesArr)
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

    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    
    const paginate = (number) =>{
        setCurrentPage(number)
    }

    const renderData = () => {
        if (data.length > 3) {
            return (
                <>
                    <Row xs={1} md={2} lg={3} xxl={4} className='g-3'>
                        {currentItems.map((item) => {
                            return (
                                <Col key={item.id} className='d-flex justify-content-center'>
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
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12} md={6} lg={3}>
                            <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate}/>
                        </Col>
                    </Row>
                </>
            )
        }
        return (
            <Col xs={12} className='d-flex justify-content-center'>
                <img src={loadingIMG} alt="Loading gif" style={{ height: '150px' }} />
            </Col>
        )
    }

    return (
        <Container className='fill-page'>
            <h2>{category.toUpperCase()}</h2>
            {renderData()}
        </Container>

    )
}

export default DisplayCategory