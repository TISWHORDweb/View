import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import SingleVideo from '../../Components/SingleVideo'
import { REACT_APP_USER_BASE_URL } from '../../Utils/Urls'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ViewVideo() {
    const { id } = useParams()
    const [video, setVideo] = useState([])

    useEffect(() => {
        const url = `${REACT_APP_USER_BASE_URL}/video/${id}`
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then((res) => {
                const response = res.data.data
                setVideo(response)
            })
            .catch((err) => console.log(err));

    }, [id]);
    return (
        <div>
            <Navbar color="black" />
            <div className="container mt-4">
                <SingleVideo class="m50" video={video}/>
                <ContactCard />
            </div>
            <Footer />
        </div>
    )
}

export default ViewVideo