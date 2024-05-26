import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import TalentTable from '../../Components/TalentTable'
import { REACT_APP_ADMIN_BASE_URL } from '../../Utils/Urls'
import axios from 'axios'
import Modal from '../../Components/Modal'
import List from '../../Components/List'
import Loader from '../../Components/Loader'
import { MyContext } from '../../context/Context'

function Talent() {
    const {talents}= useContext(MyContext)
    const [talentName, setTalentName] = useState([])
    const [click, setClick] = useState("");
    const [spin, setSpin] = useState("");
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    const [token, setToken] = useState()


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

    const Nav = () => {
        const timerId = setTimeout(() => {
            window.location.reload();
        }, 1000);

        return () => clearTimeout(timerId);
    }

    const HandleCreate = (async (e) => {
        e.preventDefault();

        if (!talentName) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {

            setSpin(true)
            const body = {
                name: talentName
            }
            console.log(body);
            axios.post(`${REACT_APP_ADMIN_BASE_URL}/talent/list/create`, body, axiosConfig)
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
    })
    return (
        <div>
            {talents ?
                <Layout>
                    <LinkHeader many="2" current="Talent" />
                    <div className="m20"></div>
                    <div className="container">
                        <Modal title=" Add Talents" id="talentModal" >
                            <div className='p-5'>
                                <section class="">
                                    <div class="container ">
                                        <center className='mb-4'><h2>Add Talents</h2></center>
                                        {click ? <div className={className}>
                                            <p>{message}</p>
                                        </div> : ""}
                                        <form className="">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control inputts" id="floatingInput22" onChange={(e) => setTalentName(e.target.value)} placeholder="" />
                                                <label for="floatingInput">Talent</label>
                                            </div>
                                            <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleCreate}>
                                                {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                                Add
                                            </button>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </Modal>
                        <List />
                        <TalentTable talent={talents} />
                    </div>
                </Layout> :
                <Loader />
            }
        </div>
    )
}

export default Talent