import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Experience from './Experience'
import Discover from './Discover'
import Customers from '../../Components/Customers'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import Video from '../../Assets/videos/video1.mp4'
import ReactPlayer from 'react-player';


function Home() {
  return (
    <div>
      <div className="">
        <div className="video-background">
          <ReactPlayer
            url={Video} 
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
       
      </div>
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