import React from 'react'
import { useParams } from 'react-router-dom'

const Courses = () => {
    const param = useParams()
  return (
    <div>
      <h1>{param.id}Courses</h1>
    </div>
  )
}

export default Courses
