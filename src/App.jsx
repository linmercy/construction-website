import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Features, Footer, Hero, Navbar, Testimonials } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-gray-900">
        <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover">
          <Navbar /> 
          <Hero /> 
        </div>
          <About /> 
          <Features />
          <Testimonials /> 
          <Contact /> 
          <Footer />
        
      </div>
    </BrowserRouter>
  )
}

export default App