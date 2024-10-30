import React from 'react'
import Home from './Home'
import CountDown from './CountDown'
import EventsList from './EventList'
import Card from './Card'
import Gallery from './Gallery'
import Sponsers from './Sponsers'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
      <Home/>
      <CountDown />
      <Card/>
     <EventsList/>
     <Gallery/>
      <Sponsers/>
    <Footer/>
    </div>
  )
}

export default LandingPage
