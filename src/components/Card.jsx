import React from 'react'
import {FaAmazon, FaBookmark} from "react-icons/fa"
const Card = (props) => {
  return (
    <>
     <div className="card">
        <div className="top">
             <i className="amazon"><FaAmazon />logo</i>
             <i className="bookmark"><FaBookmark /></i>
        </div>
        <div className="middle">
            <h3>post</h3>
            <p>{props.company}</p>
            <div className="btn">
                <h3>tag 1</h3>
                <h3>tag 2</h3>
            </div>
        </div>
        <div className="bottom">
            <h3>price</h3>
            <button>apply</button>
        </div>
     </div>
    </>
  )
}

export default Card
