import React, { useEffect, useState } from 'react'
import './Hero.css'

import SocialMediaLinks from './SocialMediaLinks';
import FileLibrary from './FileLibrary';
import HeroCard from './HeroCard';

const Hero = () => {

  return (
    <div className='main-body'>
       {/* <SocialMediaLinks/>
       <FileLibrary/>*/}
       <HeroCard/> 
       <SocialMediaLinks/>
       <FileLibrary/>
    </div>
  )
}

export default Hero