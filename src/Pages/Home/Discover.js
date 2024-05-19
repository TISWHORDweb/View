import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../context/Context';
import VideoCard from '../../Components/VideoCard';
import { TimeConverter } from '../../Utils/Core';

function Discover() {
    const { videos } = useContext(MyContext);
    const [videosData, setVideoData] = useState([])

    useEffect(()=>{
        setVideoData(videos.slice(0, 3))
    },[videos])

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
                    {videosData ?
                        <div className="row">
                            {videosData.map((each, i) => (
                                <VideoCard
                                    video={each.video}
                                    time={TimeConverter(each.createdAt)}
                                    title={each.title}
                                    description={each.description}
                                    id={each.vid}
                                />
                            ))}
                        </div> :
                        <div className="">
                            <center>Loading, please wait......</center>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Discover