import React from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import Modal from '../../Components/Modal'
import VideoTable from '../../Components/VideoTable'

function Video() {
    return (
        <div>
            <Layout>
                <LinkHeader many="2" current="Video" />
                <div className="m20"></div>
                <div className="container">
                    <Modal title=" Add Video" id="userModal" >
                        Video
                    </Modal>
                    <VideoTable />
                </div>
            </Layout>
        </div>
    )
}

export default Video