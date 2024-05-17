import React from 'react'
import Navbar from '../../Components/Navbar'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import SingleVideo from '../../Components/SingleVideo'

function ViewVideo() {
    return (
        <div>
            <Navbar color="black" />
            <div className="container">
                <SingleVideo class="m50" />
                <ContactCard />
            </div>
            <Footer />
        </div>
    )
}

export default ViewVideo