
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Chat from '../components/Chat.jsx'
//import { useParams } from 'react-router-dom'

const Community = () => {

  //const { userId} = useParams();

  return (
  <>
  <Navbar/>
    <div>
      {/* <h1>Welcome {userId}</h1> */}
    
      <Chat/>
    </div>
    </>
  )
}

export default Community