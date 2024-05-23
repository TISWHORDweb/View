import React, { useEffect, useState } from 'react'
import { REACT_APP_ADMIN_BASE_URL } from '../Utils/Urls'
import axios from 'axios'
import CautionImg from '../Assets/image/Group 5647.png'

function List({ list }) {
    const [lists, setLists] = useState([])
    const [id, setID] = useState([])
    const [click, setClick] = useState("");
    const [spin, setSpin] = useState("");
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [token, setToken] = useState()

    useEffect(() => {
        setLists(list)
    }, [list])

    useEffect(() => {
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [])

    const Nav = () => {
        const timerId = setTimeout(() => {
            window.location.reload();
        }, 1000);

        return () => clearTimeout(timerId);
    }


    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandleDelete = (e) => {
        e.preventDefault();
        if (id) {
            setSpin(true)
            const url = `${REACT_APP_ADMIN_BASE_URL}/talent/list/delete/${id}`

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
                        setMessage("Talent deleted successfully")
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
            <div class="modal fade" id="deleteListModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <center>
                                <img src={CautionImg} alt="" className='w-20 mb-3' />
                                <p>Are you sure you want to Delete this Talent from list ?</p>
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
            {lists ?
                <div className="list">
                    <ul>
                        {lists.map((each, i) => (
                            <li>{each.name} <span data-bs-toggle="modal" data-bs-target="#deleteListModal" onClick={() => setID(each.tlid)}><b>x</b></span></li>
                        ))}
                    </ul>
                </div> :
                <div className="">
                    <center>Loading, please wait......</center>
                </div>
            }
        </div>
    )
}

export default List