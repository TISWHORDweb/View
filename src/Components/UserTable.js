import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Assets/image/male.png'
import { REACT_APP_ADMIN_BASE_URL } from '../Utils/Urls'
import axios from 'axios'
import CautionImg from '../Assets/image/Group 5647.png'
import { DateConverter } from '../Utils/Core'

function UserTable({ user }) {

    const [users, setUsers] = useState([])
    const [userData, setUserData] = useState([])
    const [click, setClick] = useState("");
    const [spin, setSpin] = useState("");
    const [token, setToken] = useState()
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const ref = useRef()

    useEffect(() => {
        setUsers(user)
    }, [user])

    const GetId = (data) => {
        setUserData(data)
        ref.current.click()
    }

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

    const Nav = () => {
        const timerId = setTimeout(() => {
            window.location.reload();
        }, 2000);

        return () => clearTimeout(timerId);
    }

    const HandleDelete = (e) => {
        e.preventDefault();
        if (userData) {
            setSpin(true)
            const url = `${REACT_APP_ADMIN_BASE_URL}/user/delete/${userData.uid}`

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
            <div class="modal fade" id="userTableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body AlertModal p-5">
                            <div className=' '>
                                <section class="view">
                                    <div class="container ">
                                        <center className='mb-4'>
                                            <img src={Icon} className='w-20' alt="" />
                                        </center>
                                        <div>
                                            <div className="each">
                                                <p className='sub'>Name :</p>
                                                <p className='value'>{userData.name}</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Email :</p>
                                                <p className='value'>{userData.email}</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Date Created :</p>
                                                <p className='value'>{DateConverter(userData.createdAt)}</p>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <div className="buttons d-flex mt-3">
                                                <button className='btnNoBg2' data-bs-toggle="modal" data-bs-target="#deleteUserModal" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                </svg></button>
                                                {/* <Modal title={(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>)} id="editUserModal">
                                                    
                                                </Modal> */}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <center>
                                <img src={CautionImg} alt="" className='w-20 mb-3' />
                                <p>Are you sure you want to Delete this User ?</p>
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
            <button data-bs-toggle="modal" data-bs-target="#userTableModal" ref={ref} style={{ display: "none" }}></button>
            <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            user delete
                            {/* <center>
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
                            </center> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date & Time Added</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users ?
                            <>
                                {users.map((each, i) => (
                                    <tr>
                                        <th scope="row">{i}</th>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <td>{DateConverter(each.createdAt)}</td>
                                        <td className='' onClick={() => GetId(each)}>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </> :
                            <div className="">
                                <center>Loading, please wait......</center>
                            </div>
                        }
                    </tbody>
                </table>
                <div className="down">
                    <div className=""></div>
                    <div className="down">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <span class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                                <li class="page-item"><span class="page-link"  >1</span></li>
                                <li class="page-item"><span class="page-link"  >2</span></li>
                                <li class="page-item"><span class="page-link"  >3</span></li>
                                <li class="page-item">
                                    <span class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTable