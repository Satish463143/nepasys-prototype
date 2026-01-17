import Navbar from '@/components/common/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/common/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout