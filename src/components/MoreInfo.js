import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MoreInfo({ data }) {
    const renderLocationList = () => {
        if (data.common_locations) {
            return (
                <Col>
                    <h5>Common locations:</h5>
                    <ul className='list-unstyled'>
                        {data.common_locations.map((location, i) => <li key={i}>{location}</li>)}
                    </ul>
                </Col>
            )
        }
    }
    const renderDropList = () => {
        if (data.drops && data.drops.length > 1) {
            return (
                <Col>
                    <h5>Drops:</h5>
                    <ul className='list-unstyled'>
                        {data.drops.map((drop, i) => <li key={i}>{drop}</li>)}
                    </ul>
                </Col>
            )
        }
    }

    const renderCookingEffect = () => {
        if (data.cooking_effect) {
            return (
                <Col>
                    <h5>Cooking Effect:</h5>
                    <ul className='list-unstyled'>
                       <li>{data.cooking_effect}</li> 
                    </ul>
                </Col>
            )
        }
    }

    const renderHearts = () => {
        if (data.hearts_recovered) {
            let heartsArr = []
            for(let i = 0; i < data.hearts_recovered; i++){
                heartsArr.push(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>)
            }
            return (
                <Col>
                    <h5>Hearts Recovered:</h5>
                    {heartsArr}
                </Col>
            )
        }
    }
    
    const renderAttack = () => {
        if (data.attack) {
            return (
                <Col>
                    <h5>Attack</h5>
                    {data.attack}
                </Col>
            )
        }
    }

    const renderDefense = () => {
        if (data.defense) {
            return (
                <Col>
                    <h5>Defense</h5>
                    {data.defense}
                </Col>
            )
        }
    }


    return (
        <Row xs={1}  md={3} xl={4} className='d-flex justify-content-center mt-2'>
            <Col>
                <h5>Category:</h5>
                <h6>{data.category}</h6>
            </Col>
            {renderLocationList()}
            {renderDropList()}
            {renderCookingEffect()}
            {renderHearts()}
            {renderAttack()}
            {renderDefense()}
        </Row>
    )
}

export default MoreInfo