import React from 'react'
import Signup from '../Components/Signup'
import About from '../Components/About'
export  const NewPage = () => {
  return (
    <div>
        <About about={"Sign Up"} title={"Home / Sign Up"} />
        <Signup />
    </div>
  )
}

