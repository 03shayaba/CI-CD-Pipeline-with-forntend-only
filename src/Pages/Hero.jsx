import React from 'react'
import Home from '../Components/Home'
import Card from '../Components/Card'
import VedioCrowsel from '../Components/VedioCrowsel'

import Services from '../Components/Services'
import Influencer from '../Components/Influencer'
import Lives from '../Components/Lives'
import ImageSlider from '../Components/ImageSlider'
import ImageSliderNext from '../Components/ImageSlidernext'

import Partners from '../Components/Partners'

import Article from '../Components/Article'
import Footer from '../Components/Footer'
const Hero = () => {
  return (
    <div>
        <Home />
        <Card />
        <VedioCrowsel />
        <Services />
        <Influencer />
        <ImageSlider />
        <ImageSliderNext />
        <Partners />
        <Article />
       
       
    </div>
  )
}

export default Hero