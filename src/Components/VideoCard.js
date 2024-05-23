import React from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'

function VideoCard(props) {
    return (
        <div>
            <div className="each">
                <Video
                    url={props.video}
                    height="100%"
                    width="100%"
                />
                <span className='pt-4 pb-4'>{props.time}</span>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <Link to={`/app/video/SBTV/${props.id}`}>
                    <button className='bn633-hover bn21'>Watch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default VideoCard