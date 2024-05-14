import React from 'react'
import Img1 from '../../Assets/image/Image (1).png'
import Img2 from '../../Assets/image/Frame 163462 (3).png'
import Img3 from '../../Assets/image/Frame 163462 (4).png'
import Img4 from '../../Assets/image/Frame 163462 (5).png'

function Experience() {
    return (
        <div>
            <div className="Experience">
                <div className="container">
                    <div className="inside pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-4">
                               <div className="img">
                               <img src={Img1} alt="" />
                               </div>
                            </div>
                            <div className="col-md-8">
                                <div className="each">
                                    <h2 className='mb-4 mt-4'>Delightful user experience</h2>
                                    <div className="set">
                                        <img src={Img2} alt="" />
                                        <div className="">
                                            <h5>Important</h5>
                                            <p>Never lose track of important information</p>
                                        </div>
                                    </div>
                                    <div className="set">
                                        <img src={Img3} alt="" />
                                        <div className="">
                                            <h5>Productivity</h5>
                                            <p>Increase productivity with efficient contact management.</p>
                                        </div>
                                    </div>
                                    <div className="set">
                                        <img src={Img4} alt="" />
                                        <div className="">
                                            <h5>Access</h5>
                                            <p>Access your contacts anywhere, anytime, across devices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience