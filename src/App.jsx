import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhrereToBuy from './components/WhereToBuy/WhrereToBuy'
import AppBaner from './components/AppBanner/AppBaner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="overflew-x-hidden">
         
         <Hero/>
        <Services/>
        <WhrereToBuy/>
        <AppBaner/>
        <Footer/>
    </div>
  )
}

export default App
