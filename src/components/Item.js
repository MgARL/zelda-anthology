import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import loadingIMG from '../images/loading_zelda.gif'

function Item() {
    const { item } = useParams()
    const navigate = useNavigate()
    let [data, setData] = useState({})
    let [locationArr, setLocationArr] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${item}`)
                if (response.ok) {
                    let parsedRes = await response.json()
                    setData(parsedRes.data)
                    setLocationArr(parsedRes.data.common_locations)
                } else {
                    navigate('/404')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [item, navigate])

    const renderLocationList = () => {
        if (locationArr) {
            return locationArr.map((location, i) => <li key={i}>{location}</li>)

        }
    }

    const renderItem = () => {
        if (data.name){
            return (
                <>
                    <h1>{data.name.toUpperCase()}</h1>
                    <Row className='d-flex justify-content-end'>
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
                    <Row>
                        <Col sm={6}>
                            <h5>Category:</h5>
                            <h6>{data.category}</h6>
                        </Col>
                        <Col sm={6}>
                            <p>Common locations:</p>
                            <ul className='list-unstyled'>
                                {renderLocationList()}
                            </ul>
                        </Col>
                    </Row>
                </>
            )
        }else{
           return <img src={loadingIMG} alt="Loading gif" style={{height: '150px'}}/>
        }
    }


    return (
        <Container className='my-5'>
            {renderItem()}
        </Container>
    )
}

export default Item