import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { SessionProvider } from 'next-auth/react'

const Layout = ({children}) => {
  return (
    <div>
      <SessionProvider>
        <Navbar/>
         {children}
        <Footer/>
      </SessionProvider>
    </div>
  )
}

export default Layout