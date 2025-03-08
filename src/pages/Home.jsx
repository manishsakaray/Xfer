import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MatrixRain from './MatrixRain'


const Home = () => {
  return (
    <>
        <div id='matrix-container'>
        <MatrixRain targetId="matrix-container" />
        <Navbar/>
        <main>
        
        {/* <BinaryAnimation/> */}
      
             
          
            <Hero>
            
            </Hero>
        </main>
        </div>
    </>
  )
}

export default Home