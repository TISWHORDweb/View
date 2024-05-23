import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { REACT_APP_ADMIN_BASE_URL } from '../../Utils/Urls';
import Icon from '../../Assets/image/male.png'
import { DateConverter } from '../../Utils/Core';
// import Modal from '../../Components/Modal';
import CautionImg from '../../Assets/image/Group 5647.png'
import { useNavigate } from 'react-router-dom'

function ViewTalent({id}) {
    const [token, setToken] = useState()
    const [talent, setTalent] = useState()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    // const [name, setName] = useState("")
    // const [facebook, setFacebook] = useState("")
    // const [tiktok, setTiktok] = useState("")
    // const [youtube, setYoutube] = useState("");
    // const [twitter, setTwitter] = useState("");
    // const [snapchat, setSnapchat] = useState("");
    // const [age, setAge] = useState("");

    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    // useEffect(() => {
    //     if (talent) {
    //         setName(talent.name)
    //         setFacebook(talent.facebook)
    //         setTiktok(talent.tiktok)
    //         setTwitter(talent.twitter)
    //         setYoutube(talent.youtube)
    //         setSnapchat(talent.snapchat)
    //         setAge(talent.age)
    //     }
    // }, [talent])

    useEffect(() => {
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [])

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }
    const navigate = useNavigate();

    const Nav = (check) => {
        const timerId = setTimeout(() => {
            if (check === 1) {
                navigate('/admin/talent');
                window.location.reload();
            } else if (check === 0) {
                window.location.reload();
            }

        }, 2000);

        return () => clearTimeout(timerId);
    }

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "v-token": token
        }
    }

    useEffect(() => {
        if (id && token) {
            const url = `${REACT_APP_ADMIN_BASE_URL}/talent/${id}`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "v-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setTalent(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token, id]);

    const HandleDelete = (e) => {
        e.preventDefault();
        if (id) {
            setSpin(true)
            const url = `${REACT_APP_ADMIN_BASE_URL}/talent/delete/${id}`

            axios.delete(url, axiosConfig)
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

    // const HandleEdit = (e) => {
    //     e.preventDefault();

    //     if (!id) {
    //         setClick(true)
    //         setClassName("alert__message error")
    //         setMessage("Sorry user cannot be edited, Try again later")
    //         Clearer()
    //     } else {

    //         setSpin(true)

    //         const body = {
    //             id,
    //             name,
    //             tiktok,
    //             snapchat,
    //             youtube,
    //             age,
    //             twitter,
    //             facebook
    //         }
    //         console.log(body);
    //         axios.put(`${REACT_APP_ADMIN_BASE_URL}/video/edit`, body, axiosConfig)
    //             .then(response => {
    //                 const data = response.data

    //                 if (data.status === true) {
    //                     setClick(true)
    //                     setClassName("alert__message success")
    //                     setMessage(data.message)
    //                     setSpin(false)
    //                     Nav(0)
    //                 }
    //             }).catch((e) => {
    //                 console.log(e);
    //                 setClick(true)
    //                 setClassName("alert__message error")
    //                 setMessage("There was an error trying to process your request, Please try again later")
    //                 setSpin(false)
    //                 Clearer()
    //             })
    //     }
    // }

    return (
        <div>
            {/* <div className="m50"></div> */}
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <center>
                                <img src={CautionImg} alt="" className='w-20 mb-3' />
                                <p>Are you sure you want to Delete this TALENT ?</p>
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
            <div className="">
                <div className=' '>
                    <section class="SBTV">
                        <div class="container ">
                            <center className='mb-4'>
                                <img src={Icon} className='w-20' alt="" />
                            </center>
                            {talent ?
                                <div>
                                    <div className="each">
                                        <p className='sub'>Name :</p>
                                        <p className='value'>{talent.user.name} </p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Talent:</p>
                                        <p className='value'>{talent.name}</p>
                                    </div>
                                    <small>SOCIAL HANDLES</small>
                                    <div className="m-3"></div>
                                    <div className="each">
                                        <p className='sub'>Tiktok :</p>
                                        <p className='value'>{talent.tiktok}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Snapchat :</p>
                                        <p className='value'>{talent.snapchat}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Facebook :</p>
                                        <p className='value'>{talent.facebook}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Youtube :</p>
                                        <p className='value'>{talent.youtube}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Twitter :</p>
                                        <p className='value'>{talent.twitter}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Date Created :</p>
                                        <p className='value'>{DateConverter(talent.createdAt)}</p>
                                    </div>
                                </div> : <><center>Loading....</center></>}
                            <div className="down">
                                <div className="buttons d-flex mt-3">
                                    <button className='btnNoBg2' data-bs-toggle="modal" data-bs-target="#deleteModal" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                    </svg></button>
                                    {/* <Modal title={(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>)} id="editModal">
                                        <div className="p-5">
                                        <div class="justify-content-space mb-3">
                                            <h3 className='mb-3 f20'>Edit Talent</h3>
                                            <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                                        </div>
                                        <form className="">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={name} onChange={(e) => setName(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Talent</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={age} onChange={(e) => setAge(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Age</label>
                                            </div>
                                            <small>Social Handles</small>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Facebook</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Twitter</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={tiktok} onChange={(e) => setTiktok(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Tiktok</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={snapchat} onChange={(e) => setSnapchat(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Snapchat</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" value={youtube} onChange={(e) => setYoutube(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Youtube</label>
                                            </div>
                                            <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleEdit}>
                                                {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                                Update
                                            </button>
                                        </form>
                                        </div>
                                    </Modal> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ViewTalent