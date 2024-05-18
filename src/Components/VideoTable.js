import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'

function VideoTable({ video }) {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        setVideos(video)
    }, [video])
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Video</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date_Added</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos ?
                            <>
                                {videos.map((each, i) => (
                                    <tr>
                                        <th scope="row">{i}</th>
                                        <td style={{width:"20%"}}>
                                            <Video
                                                url={each.video}
                                                height="100%"
                                                width="100%"
                                            />
                                        </td>
                                        <td>{each.title}</td>
                                        <td>{each.description}</td>
                                        <td>08/04/2024</td>
                                        <td className='' >
                                            <Link to={`/admin/video/view/${each.vid}`}>
                                                <span className='black'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </td>

                                    </tr>
                                ))}
                            </> :
                            <div className="">
                                <center>Loading, please wait......</center>
                            </div>
                        }
                    </tbody>
                </table>
                <div className="down">
                    <div className=""></div>
                    <div className="down">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <span class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                                <li class="page-item"><span class="page-link"  >1</span></li>
                                <li class="page-item"><span class="page-link"  >2</span></li>
                                <li class="page-item"><span class="page-link"  >3</span></li>
                                <li class="page-item">
                                    <span class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoTable