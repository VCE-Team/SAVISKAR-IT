import React from 'react'
import Home from './Home';
import WhatWeAbout from './WhatWeAbout'
import CountDown from './CountDown'
import TimeLine from './TimeLine'
import BackGround from './BackGround';
import Challenges from './Challenges'
import Footer from './Footer';
import Prices from './Prices';
import Participate from './Participate';
// import CardContainer from './CardContainer';
// import "../../assets/scss/style.scss"
const Hackathon = () => {
  return (
    <div>
        <Home/>
        <WhatWeAbout/>
        <BackGround/>
        <CountDown/>
        <BackGround/>
        <Challenges/>
        <BackGround/>
        <Participate/>
        <BackGround/>
        <TimeLine/>
        {/* <CardContainer/> */}
        <BackGround/>
        <Prices/>
        <Footer/>
        
    </div>
  )
}

export default Hackathon