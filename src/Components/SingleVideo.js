import React from 'react'
import Video from './Video'

function SingleVideo(props) {
    return (
        <div>
            <div className={props.class}></div>
            <div className="SingleVideo ">
                <div className="container">
                    <div className="col-md-12 mb-3">
                        <div className="each">
                        <span className='minute white mt-3 mb-3'>2 Minutes Ago</span>
                        <h4 className='mt-3'> The Importance of Effective Contact Management in the Digital Age</h4>
                            <p>Discuss the challenges of managing contacts across different platforms, and how your app solves them.</p>
                            <Video />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleVideo