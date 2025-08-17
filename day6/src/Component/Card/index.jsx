import React from 'react'
import './index.css'

const Card = (props) => {
  const { dog } = props
  return (
    <div className="card">
      <h3>{dog.attributes.name}</h3>
      <p>{dog.attributes.description}</p>
    </div>
  )
}

export default Card