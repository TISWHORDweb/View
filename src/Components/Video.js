import React from 'react'
import VideoLink from '../Assets/videos/video.mp4'
import ReactPlayer from 'react-player';

function Video() {
    return (
        <div>
            <div className="">
                <div className="video-background">
                    <ReactPlayer
                        url={VideoLink}
                        playing
                        loop
                        muted
                        width="100%"
                        height="100%"
                    />
                </div>

            </div>
        </div>
    )
}

export default Video