import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { REACT_APP_ADMIN_BASE_URL } from '../../Utils/Urls';
import { UploadImage } from '../..//Utils/Core'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import Modal from '../../Components/Modal'
import VideoTable from '../../Components/VideoTable'


function Video() {
    const [token, setToken] = useState()
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [click, setClick] = useState("");
    const [spin, setSpin] = useState("");
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [video, setVideo] = useState([])

    useEffect(() => {
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [])

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "v-token": token
        }
    }

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    useEffect(() => {
        if (token) {
            const url = `${REACT_APP_ADMIN_BASE_URL}/video/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "v-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setVideo(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token]);

    const Nav = () => {
        const timerId = setTimeout(() => {
           window.location.reload();
        }, 2000);

        return () => clearTimeout(timerId);
    }

    const HandleCreate = (async (e) => {
        e.preventDefault();

        if (!url || !title) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {

            setSpin(true)
            const video = await UploadImage(url);
            console.log(video);
            if (video) {
                const body = {
                    video,
                    title,
                    description
                }
                console.log(body);
                axios.post(`${REACT_APP_ADMIN_BASE_URL}/video/create`, body, axiosConfig)
                    .then(response => {
                        const data = response.data
                        console.log(data);

                        if (data.status === true) {
                            setClick(true)
                            setClassName("alert__message success")
                            setMessage(data.message)
                            setSpin(false)
                            Nav()
                        } else if (data.status === false) {
                            console.log(e);
                            setClick(true)
                            setClassName("alert__message error")
                            setMessage(data.message)
                            setSpin(false)
                            Clearer()
                        }
                    }).catch((e) => {
                        console.log(e);
                        setClick(true)
                        setClassName("alert__message error")
                        setMessage("There was an error trying to process your request, Please try again later")
                        setSpin(false)
                        Clearer()
                    })
            }
        }
    })

    return (
        <div>
            <Layout>
                <LinkHeader many="2" current="Video" />
                <div className="m20"></div>
                {video ?
                <div className="container">
                    <Modal title=" Add Video" id="userModal" >
                        <div className='p-5'>
                            <section class="">
                                <div class="container ">
                                    <center className='mb-4'><h2>Create Video</h2></center>
                                    {click ? <div className={className}>
                                        <p>{message}</p>
                                    </div> : ""}
                                    <form className="">
                                        <label for="floatingInput">Video</label>
                                        <div class="form-floating mb-3">
                                            <input type="file" class="form-control inputts pt-3" id="floatingInput11" onChange={(e) => setUrl(e.target.files[0])} placeholder="" />

                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control inputts" id="floatingInput22" onChange={(e) => setTitle(e.target.value)} placeholder="" />
                                            <label for="floatingInput">Title</label>
                                        </div>

                                        <textarea name="" cols="30" rows="5" placeholder='Description' class="form-control bord bordBlack" id="floatingInput33" onChange={(e) => setDescription(e.target.value)} ></textarea>

                                        <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleCreate}>
                                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                            Create
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </Modal>
                    <VideoTable video={video} />
                </div> :
                <div className="">
                    <center>Loading, please wait......</center>
                </div>}
            </Layout>
        </div>
    )
}

export default Video