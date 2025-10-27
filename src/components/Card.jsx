import React from 'react'
import {FaAmazon, FaBookmark} from "react-icons/fa"
const Card = (props) => {
  return (
    <>
     <div className="card">
        <div className="top">
             <i className="amazon"><FaAmazon />{props.brandlogo}</i>
             <i className="bookmark"><FaBookmark /></i>
        </div>
        <div className="middle">
            <h3>{props.post}</h3>
            <p>{props.companyname}</p>
            <div className="btn">
                <h3>{props.tag1}</h3>
                <h3>{props.tag2}</h3>
            </div>
        </div>
        <div className="bottom">
            <h3>{props.price}</h3>
            <button>{props.apply}</button>
        </div>
     </div>
    </>
  )
}

export default Card
