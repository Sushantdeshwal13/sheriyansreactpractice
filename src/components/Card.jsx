import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
      <img src={props.image}></img>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
    </>
  )
}

export default Card
