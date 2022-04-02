import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function Searchbar() {
    const [searchInput, setSearchInput] = useState('')
    let navigate = useNavigate()
    return (
        <>
            <Form className="d-flex" onSubmit={(e) => {
                e.preventDefault()
                // Redirect to Item Page                
                navigate(`/item/${searchInput}`)

                setSearchInput('')
            }}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                />
                <Button variant="success" type='submit'>Search</Button>
            </Form>
        </>
    )
}

export default Searchbar