import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams(100)
  return (
    <div className='text-3xl text-gray-700 p-7'>User: {id}</div>
  )
}

export default User