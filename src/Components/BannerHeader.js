import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/Context';


function BannerHeader() {
    const { insight } = useContext(MyContext);
    
    return (
        <div>
            {insight ?
            <div className="BannerDetails">
                <div className="sets">
                    <div className="set1">
                        <div className="">
                            <h2 className='m-0'>Welcome back, {insight.name}</h2>
                            {/* <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg> You have 2 new messages and 15 new tasks</p> */}
                        </div>
                    </div>
                    <Link to="/admin/video">
                        <div className="set2">
                            <button className="bn632-hover bn21">  <i class='bx bxs-videos'></i> Post Videos</button>
                        </div>
                    </Link>

                </div>
            </div> :
           <div className="">
           <center>Loading, please wait......</center>
       </div>}
        </div>
    )
}

export default BannerHeader