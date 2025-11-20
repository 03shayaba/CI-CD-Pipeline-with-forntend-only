import React from 'react'
import About from '../Components/About'
import CardsGallery from '../Components/CardsGallery'
import Slider_stream from '../Components/slider_stream'
import Streaming1 from '../Components/Streaming1'
import  Stream_details from '../Components/Stream_details'

const Streaming_2page = () => {
  return (
    <div>
       <About about={"Streaming Videos"} title={"Home / Streaming Videos"} /> 
       <CardsGallery />
    </div>
  )
}
export default Streaming_2page

export const Streaming_3page =() =>{
  return (
  <div>
     <About about={"Streaming Videos"} title={"Home / Streaming Videos"} /> 
    <Slider_stream />
  </div>
  )
}


export const Streaming_page1 =() =>{
  return(
    <div>
      <About about={"Streaming Videos"} title={"Home / Streaming Videos"} />
      <Streaming1 />
    </div>
  )
}

export const Streaming_4page =() =>{
  return(
    <div>
      <About about={"Streaming Videos"} title={"Home / Streaming Videos"} />
      <Stream_details />
    </div>
  )
}

