import React from 'react'
import { useParams } from 'react-router-dom'

function Item() {
    let { item } = useParams()
  return (
    <div>
        <h1>Item</h1>
        <h2>{item}</h2>
    </div>
  )
}

export default Item