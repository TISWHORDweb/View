import React, { useEffect, useState } from 'react'
import SingleVideo from '../../Components/SingleVideo'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import Modal from '../../Components/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import { REACT_APP_ADMIN_BASE_URL } from '../../Utils/Urls'
import axios from 'axios'
import CautionImg from '../../Assets/image/Group 5647.png'

function VideoActions() {
    const { id } = useParams()
    const [video, setVideo] = useState([])
    const [token, setToken] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [click, setClick] = useState("");
    const [spin, setSpin] = useState("");
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    useEffect(() => {
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const url = `${REACT_APP_ADMIN_BASE_URL}/video/${id}`
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
    }, [token, id]);

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

    const Nav = (check) => {
        const timerId = setTimeout(() => {
            if(check === 1){
                navigate('/admin/video');
                window.location.reload();
            } else  if(check === 0){
                window.location.reload();
            }
          
        }, 2000);

        return () => clearTimeout(timerId);
    }

    useEffect(()=>{
        if(video){
            setTitle(video.title)
            setDescription(video.description)
        }
    },[video])

    const HandleEdit = (e) => {
        e.preventDefault();

        if (!id) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Sorry user cannot be edited, Try again later")
            Clearer()
        } else {

            setSpin(true)

            const body = {
                id,
                title,
                description
            }
            console.log(body);
            axios.put(`${REACT_APP_ADMIN_BASE_URL}/video/edit`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
                        Nav(0)
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

    const HandleDelete = (e) => {
        e.preventDefault();
        if (id) {
            setSpin(true)
            const url = `${REACT_APP_ADMIN_BASE_URL}/video/delete/${id}`

            axios.delete(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "v-token": token
                }
            })
                .then((res) => {
                    const status = res.data.status
                    if (status) {
                        setSpin(false)
                        setClick(true)
                        setMessage("Contact deleted successfully")
                        setClassName("alert__message success")
                        Nav(1)
                    }
                })
                .catch((err) => {
                    setClick(true)
                    setClassName("alert__message error")
                    setMessage("Try again later")
                    setSpin(false)
                    console.log(err)
                    Clearer()
                });
        }
    }

    return (
        <div>
                 <div class="modal fade" id="deleteVideoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <center>
                                <img src={CautionImg} alt="" className='w-20 mb-3' />
                                <p>Are you sure you want to Delete this video ?</p>
                                {click ? <div className={className}>
                                    <p>{message}</p>
                                </div> : ""}
                                <div className="buttonss">
                                    <button type="button" class="btn success bn633-hover bn21" onClick={HandleDelete}>
                                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                        Delete
                                    </button>
                                    <button type="button" class="btn cancel btnNoBg2" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <Layout >
                <LinkHeader many="3" where="/admin/video" page="Video" current="view" />
                {video ?
                    <div className="container">
                        <SingleVideo class="m20" video={video} />
                        <div className="down">
                            <div className="buttons d-flex mt-3">
                                <button className='btnNoBg2' data-bs-toggle="modal" data-bs-target="#deleteVideoModal" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                </svg></button>
                                <Modal title={(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>)} id="editModal">
                                    <div className='p-5'>
                                        <section class="">
                                            <div class="container ">
                                                <center className='mb-4'><h2>Edit Video</h2></center>
                                                {click ? <div className={className}>
                                                    <p>{message}</p>
                                                </div> : ""}
                                                <form className="">
                                                    <label for="floatingInput">Video</label>
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control inputts pt-3" value={video.video} disabled id="floatingInput11" placeholder="" />

                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control inputts" id="floatingInput22" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" />
                                                        <label for="floatingInput">Title</label>
                                                    </div>

                                                    <textarea name="" cols="30" rows="5" placeholder='Description' value={description} class="form-control bord bordBlack" id="floatingInput33" onChange={(e) => setDescription(e.target.value)} ></textarea>

                                                    <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleEdit}>
                                                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                                        Update
                                                    </button>
                                                </form>
                                            </div>
                                        </section>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div> :
                    <div className="">
                        <center>Loading, please wait......</center>
                    </div>}
            </Layout>
        </div>
    )
}

export default VideoActions