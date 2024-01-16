import { useState } from 'react'

import './App.css'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Middle from './components/Middle'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
function App() {

  return (
   <div>
    {/* <Navbar/> */}
    <Hero/>
    <Middle/>
    <div className='w-full  h-screen bg-gradient-to-r from-indigo-200 to-blue-900 py-20'>
      
        <p className='text-center font-abc text-6xl'>FAQS</p>
      <FAQ/>
    </div>
    <Footer/>
   </div>
  )
}

export default App
