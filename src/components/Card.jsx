import React from 'react'
import {FaAmazon, FaBookmark} from "react-icons/fa"
const Card = (props) => {
  return (
    <>
     <div className="card">
        <div className="top">
             <i className="amazon"><FaAmazon /></i>
             <i className="bookmark"><FaBookmark /></i>
        </div>
        <div className="middle">
            <h3>senior fd</h3>
            <p>company name</p>
            <div className="btn">
                <h3>part time</h3>
                <h3>full time</h3>
            </div>
        </div>
        <div className="bottom">
            <h3>price</h3>
            <button>Apply now</button>
        </div>
     </div>
    </>
  )
}

export default Card
