import React from 'react'
import Img1 from '../../Assets/image/Image (2).png'
import Img2 from '../../Assets/image/Image (3).png'
import Img3 from '../../Assets/image/Image (4).png'

function Discover() {
    return (
        <div>
            <div className="container">
                <div className="Discover mt-5 mb-5">
                    <center>
                        <div className="header mb-5">
                            <h2>Discover the latest news.</h2>
                            <p>Stay informed and inspired with valuable insights for business growth.</p>
                        </div>
                    </center>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="each">
                                <img src={Img1} alt="" />
                                <span className='pt-4 pb-4'>2 Minutes Ago</span>
                                <h4>The Importance of Effective Contact Management in the Digital Age</h4>
                                <p>Discuss the challenges of managing contacts across different platforms, and how your app solves them.</p>
                                <button className='bn633-hover bn21'>Watch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="each">
                                <img src={Img2} alt="" />
                                <span className='pt-4 pb-4'>2 Minutes Ago</span>
                                <h4>Top 5 Tips to Supercharge Your Contact Management</h4>
                                <p>Offer practical tips for users to optimize their contact organization, highlighting how your app facilitates these practices.</p>
                                <button className='bn633-hover bn21'>Watch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="each">
                                <img src={Img3} alt="" />
                                <span className='pt-4 pb-4'>2 Minutes Ago</span>
                                <h4>The Future of Contact Management</h4>
                                <p>Trends and Innovations" - Discuss technological advancements in contact management and how your app leads the way.</p>
                                <button className='bn633-hover bn21'>Watch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover