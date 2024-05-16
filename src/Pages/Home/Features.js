import React from 'react'
import Img1 from '../../Assets/image/Frame 163462.png'
import Img2 from '../../Assets/image/Frame 163462 (1).png'
import Img3 from '../../Assets/image/Frame 163462 (2).png'

function Features() {
    return (
        <div>
            <div className="container">
                <div className="Features animate__animated animate__backInUp pt-4">
                    <center >
                        <div className="header">
                            <h1>More Features</h1>
                            <p className='f15'>These are a few of the key features of View that distinguishit from other Contact platforms</p>
                        </div>
                    </center>
                    <div className="each mt-5">
                        <div className="row mb-3">
                            <div className="col-md-4 mb-3">
                                <img src={Img1} alt="" />
                                <h4>Powerful Search and Filtering:</h4>
                                <p>Forget endlessly scrolling through endless lists. Our advanced search and filtering capabilities allow you to pinpoint specific contacts instantly. Search by name, email address, company, tags, or any custom field, making information retrieval a breeze.</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={Img2} alt="" />
                                <h4> Advanced Sharing and Collaboration:</h4>
                                <p> Collaboration simplified! Share your contact information with unique URLs, granting access to specific profiles or groups of contacts. Seamlessly collaborate with colleagues on client lists, vendor details, or team contacts, ensuring everyone has the latest information.</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={Img3} alt="" />
                                <h4>Integration with Your Ecosystem:</h4>
                                <p>Streamline your workflow further! Integrate View with your favorite tools and platforms. Seamlessly import contacts from your CRM, email provider, or calendar app, and eliminate the need for manual data entry. This ensures a centralized hub for all your contacts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features