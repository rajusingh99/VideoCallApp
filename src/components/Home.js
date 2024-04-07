import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    
    const handleJoin =()=>{
        navigate(`/room/:${value}`)
    }
  return (
    <div>
        <input value={value} type='text' onChange={(e)=>setValue(e.target.value)} placeholder='Enter Name...'/>
        <button onClick={handleJoin}>Join</button>
    </div>
  )
}
