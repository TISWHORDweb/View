import React, { useContext } from 'react'
import VideoCard from '../../Components/VideoCard'
import ContactCard from '../../Components/ContactCard';
import Footer from '../../Components/Footer';
import { TimeConverter } from '../../Utils/Core';
import Navbar from '../../Components/Navbar';
import { MyContext } from '../../context/Context';
import Search from '../../Components/Search';

function AllVideo() {
    const { filteredVideos } = useContext(MyContext);

    return (
        <div>
            <Navbar color="black" />
            <div className="m50"></div>
            <Search />
            <div className="container mt-5">
                {filteredVideos ?
                    <div className="Allvideos Discover">
                        <div className="row">
                            {filteredVideos.length === 0 && <p>No Videos found matching your search.</p>}
                            {filteredVideos.map((each, i) => (
                                <VideoCard
                                    video={each.video}
                                    time={TimeConverter(each.createdAt)}
                                    title={each.title}
                                    description={each.description}
                                    id={each.vid}
                                />
                            ))}
                        </div>
                    </div> :
                    <div className="">
                        <center>Loading, please wait......</center>
                    </div>
                }
                <ContactCard />
            </div>
            <Footer />
        </div>
    )
}

export default AllVideo