import React, { useEffect, useState } from 'react'
import Video from './Video'
import { TimeConverter } from '../Utils/Core'

function SingleVideo(props) {
    const [video, setVideo] = useState({})
    useEffect(() => {
        setVideo(props.video)
    }, [props])
    return (
        <div>
            <div className={props.class}></div>
            {video ?
                <div className="SingleVideo ">
                    <div className="container">
                        <div className="col-md-12 mb-3">
                            <div className="each">
                                <span className='minute white mt-3 mb-3'>{TimeConverter(video.createdAt)}</span>
                                <h4 className='mt-3'>{video.title}</h4>
                                <p>{video.description}.</p>
                                <Video
                                    url={video.video}
                                />
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="">
                    <center>Loading, please wait......</center>
                </div>}
        </div>

    )
}

export default SingleVideo