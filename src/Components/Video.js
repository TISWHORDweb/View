import React from 'react'
import ReactPlayer from 'react-player';

function Video(props) {

    return (
        <div>
            <div className="">
                <div className="video-background">
                    <ReactPlayer
                        url={props.url}
                        playing
                        loop
                        muted
                        width={props.width ? props.width : "100%"}
                        height={props.height ? props.height : "100%"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Video