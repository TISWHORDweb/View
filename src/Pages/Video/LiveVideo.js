import React from 'react'
import ReactPlayer from 'react-player'
import Video from '../../Assets/videos/video1.mp4'

function LiveVideo() {
    return (
        <div>
            <div className="">
                <div className="video-background">
                    <ReactPlayer
                        url={Video}
                        playing
                        // loop
                        // muted
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    )
}

export default LiveVideo