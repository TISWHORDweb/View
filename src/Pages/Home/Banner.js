import React from 'react'
import BannerImg from '../../Assets/image/Image.png'

function Banner() {
  return (
    <div>
        <div className="container">
            <div className="Banner mb-5">
                <center>
                <div className="text mb-4 pt-5">
                    <h2 className='animate__animated animate__fadeInDown'>Simplify Your Connections. Manage Contacts Effortlessly.</h2>
                    <p>Organize your contacts, share information seamlessly, and stay connected with ease. Our web application makes managing contacts a breeze. Tired of the constant struggle to keep track of your contacts? Scattered emails, outdated spreadsheets, and cluttered notes create a disorganized mess, hindering your productivity and making it difficult to find the information you need, when you need it.</p>
                    <div className="btns animate__animated animate__bounce">
                    <button class="bn632-hover bn21" type="">Try It Free</button>
                    <button class="bn632-hover bn19" type="">Explore</button>
                    </div>
                </div>
                <img src={BannerImg} alt="" />
                </center>
            </div>
        </div>
    </div>
  )
}

export default Banner