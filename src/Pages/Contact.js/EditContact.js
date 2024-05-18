import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { REACT_APP_USER_BASE_URL } from '../../Utils/Urls';

function EditContact({ data }) {
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [id, setId] = useState();
    const [token, setToken] = useState()
    // const [data, setData] = useState()
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [phone, setPhone] = useState("")


    useEffect(() => {
        if (data) {
            setId(data.cid)
            setFirstname(data.firstName)
            setLastname(data.lastName)
            setPhone(data.phone)
        }
        console.log(data);
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [data])

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

    const Nav = () => {
        const timerId = setTimeout(() => {
           window.location.reload();
        }, 3000);

        return () => clearTimeout(timerId);
    }

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
                firstName,
                lastName,
                phone
            }
            console.log(body);
            axios.put(`${REACT_APP_USER_BASE_URL}/contact/edit`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
                        Nav()
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

    return (
        <div>
            <div className='p-5 '>
                <section class="">
                    <div class="container ">
                        <center className='mb-4'><h2>Edit contact</h2></center>
                        {click ? <div className={className}>
                            <p>{message}</p>
                        </div> : ""}
                        <form className="">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control inputts" value={firstName} id="floatingname" onChange={(e) => setFirstname(e.target.value)} placeholder="name@example.com" />
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control inputts" value={lastName} id="floatinglastname" onChange={(e) => setLastname(e.target.value)} placeholder="Password" />
                                <label for="floatingInput">Last Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="nu,ber" class="form-control inputts" value={phone} id="floatingemail" onChange={(e) => setPhone(e.target.value)} placeholder="name@example.com" />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleEdit} >
                                {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                Edit contact
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default EditContact