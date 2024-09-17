import React from 'react'
import NavBar from '../component/NavBar'
import Features from '../component/Features'
import { Carousel } from 'react-bootstrap'
import ProfileCards from '../component/ProfileCards'
import Subscription from '../component/Subscription'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
