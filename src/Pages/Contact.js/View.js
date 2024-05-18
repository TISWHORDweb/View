import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { REACT_APP_USER_BASE_URL } from '../../Utils/Urls';
import Navbar from '../../Components/Navbar'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import Icon from '../../Assets/image/male.png'
import { DateConverter } from '../../Utils/Core';
import EditContact from './EditContact';
import Modal from '../../Components/Modal';
import CautionImg from '../../Assets/image/Group 5647.png'
import { useNavigate } from 'react-router-dom'

function View() {
    const [token, setToken] = useState()
    const [contact, setContact] = useState([])
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);

    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const { id } = useParams()

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
    
    const Nav = () => {
        const timerId = setTimeout(() => {
           navigate('/app/contact')
           window.location.reload();
        }, 3000);

        return () => clearTimeout(timerId);
    }



    useEffect(() => {
        if (token) {
            const url = `${REACT_APP_USER_BASE_URL}/contact/${id}`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "v-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setContact(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token, id]);

    const HandleDelete = (e) => {
        e.preventDefault();
        if (id) {
            setSpin(true)
            const url = `${REACT_APP_USER_BASE_URL}/video/delete/${id}`

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
                        Nav()
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
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <center>
                                <img src={CautionImg} alt="" className='w-20 mb-3' />
                                <p>Are you sure you want to Delete this contact ?</p>
                                {click ? <div className={className}>
                                    <p>{message}</p>
                                </div> : ""}
                                <div className="buttonss">
                                    <button type="button" class="btn success bn633-hover bn21" onClick={HandleDelete}>
                                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                        Delete
                                    </button>
                                    <button type="button" class="btn cancel btnNoBg" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />

            <div className="view">
                <div className=' '>
                    <section class="view">
                        <div class="container form__section-container p-5">
                            <center className='mb-4'>
                                <img src={Icon} className='w-20' alt="" />
                            </center>
                            {contact ?
                                <div>
                                    <div className="each">
                                        <p className='sub'>First Name :</p>
                                        <p className='value'>{contact.firstName} </p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Last Name :</p>
                                        <p className='value'>{contact.lastName}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Phone Number :</p>
                                        <p className='value'>{contact.phone}</p>
                                    </div>
                                    <div className="each">
                                        <p className='sub'>Date Created :</p>
                                        <p className='value'>{DateConverter(contact.createdAt)}</p>
                                    </div>
                                </div> : <><center>Loading....</center></>}
                            <div className="down">
                                <div className="buttons d-flex mt-3">
                                    <button className='btnNoBg2' data-bs-toggle="modal" data-bs-target="#deleteModal" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                    </svg></button>
                                    <Modal title={(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>)} id="editModal">
                                        <EditContact data={contact} />
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ContactCard />
            <Footer />
        </div>
    )
}

export default View