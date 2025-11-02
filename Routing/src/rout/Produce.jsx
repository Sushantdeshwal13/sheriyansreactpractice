import React from 'react'
import Men from './Men'
import Women from './Men'
import { Link, Outlet } from 'react-router-dom'

const Produce = () => {
  return (
    <div>
      <h1>Product page</h1>
     <Link to="/product/mens">Mens</Link>
     <Link to="/product/womens">Womens</Link>
     <Link to="/product/kids">Kids</Link>
      <Outlet/>
    </div>
  )
}

export default Produce
