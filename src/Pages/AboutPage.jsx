import React from 'react'
import About from '../Components/About'
import Social from '../Components/Social'
import ImageSlider from '../Components/ImageSlider'
import ImageSliderNext from '../Components/ImageSlidernext'
import Partners from '../Components/Partners'
import Card from '../Components/Card'

const AboutPage = () => {
  return (
    <div>
        <About about={"About Me"} title={"Home / About Me"} />
        <Social />
        <div className='bg-[#fff1f1] pt-25 '>
          <ImageSlider />
          <ImageSliderNext />
          <Partners />
        </div>
        <Card />
    </div>
  )
}

export default AboutPage