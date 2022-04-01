import React from 'react'
import { useParams } from 'react-router-dom'

function DisplayCategory() {
    let { category } = useParams()
  return (
    <div>
        <h1>DisplayCategory</h1>
        <h2>{category}</h2>
    </div>

  )
}

export default DisplayCategory