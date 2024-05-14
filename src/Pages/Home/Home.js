import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Experience from './Experience'
import Discover from './Discover'
import Customers from '../../Components/Customers'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <Experience />
        <Discover />
        <Customers />
        <ContactCard />
        <Footer />
    </div>
  )
}

export default Home