import React from 'react'
import Navbar from '../../Components/Navbar'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import SingleVideo from '../../Components/SingleVideo'

function ViewVideo() {
  return (
    <div>
        <Navbar color="black" />
        <SingleVideo />
        <ContactCard />
        <Footer />
    </div>
  )
}

export default ViewVideo