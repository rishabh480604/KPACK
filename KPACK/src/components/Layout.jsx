import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div className='min-h-screen'>
    
        <Header/>
        <Outlet/>
        <Footer />
    </div>
  )
}


export default Layout