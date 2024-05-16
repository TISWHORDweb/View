import React from 'react'
import Img1 from '../Assets/image/Image (2).png'
import Video from './Video'

function SingleVideo() {
    return (
        <div>
            <div className="m50"></div>
            <div className="SingleVideo ">
                <div className="container">
                    <div className="col-md-12 mb-3">
                        <div className="each">
                        <span className='minute white mt-3'>2 Minutes Ago</span>
                            <Video />
                            <h4>The Importance of Effective Contact Management in the Digital Age</h4>
                            <p>Discuss the challenges of managing contacts across different platforms, and how your app solves them.</p>
                            <button className='bn633-hover bn21'>View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleVideo