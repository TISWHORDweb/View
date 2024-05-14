import React from 'react'
import Navbar from '../../Components/Navbar'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import Tables from './Tables'

function Contact() {
    return (
        <div>
            <Navbar />
            <Tables />
            <ContactCard />
            <Footer />
        </div>
    )
}

export default Contact