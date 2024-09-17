import React from 'react'
import Features from '../component/Features'
import { Carousel } from 'react-bootstrap'
import ProfileCards from '../component/ProfileCards'
import Subscription from '../component/Subscription'

const HomePage = () => {
  return (
    <>
    
      <Features/>
      <Carousel/>
      <ProfileCards/>
      <Subscription/>
    </>
  )
}

export default HomePage
