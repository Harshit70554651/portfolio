import React, { useState } from 'react'
import Navbar from './Componants/Navbar'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Project from './Sections/Project'
import Exprience from './Sections/Exprience'
import Testimonial from './Sections/Testimonial'
import Contect from './Sections/Contect'
import Footer from './Sections/Footer'
import ParticalBackground from "./Componants/ParticalBackground";
import CustomCursor from './Componants/CustomCursor'
import IntroAnimation from './Componants/IntroAnimation'




const App = () => {
   const [introDone, setIntroDone] = React.useState(false)

  return (
   
    
    <>
    {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true) } />}
      {introDone && (
    <div className='relative gradient'>
      <CustomCursor/>
      <ParticalBackground/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Exprience/>
      <Testimonial/>
      <Contect/>
      <Footer/>
    </div>
    )}
    </>
  )
}

export default App