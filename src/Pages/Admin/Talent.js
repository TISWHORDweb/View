import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import Modal from '../../Components/Modal'
import TalentTable from '../../Components/TalentTable'
import axios from 'axios';
import { REACT_APP_USER_BASE_URL } from '../../Utils/Urls';
import { Link, useNavigate } from 'react-router-dom'
import { Check } from '../../Utils/Core'

function Talent() {
    const [token, setToken] = useState()
    const [name, setName] = useState("")
    const [facebook, setFacebook] = useState("")
    const [tiktok, setTiktok] = useState("")
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [age, setAge] = useState("");
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

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
        }, 3000);

        return () => clearTimeout(timerId);
    }

    const HandleCreate = ((e) => {
        e.preventDefault();

        if (!name || !age || !tiktok) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                name,
                facebook,
                snapchat,
                tiktok,
                twitter,
                youtube,
                age
            }

            axios.post(`${REACT_APP_USER_BASE_URL}/talent/create`, body, axiosConfig)
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
            <Layout>
                <LinkHeader many="2" current="Talent" />
                <div className="m20"></div>
                <div className="container">
                    <TalentTable />
                </div>
            </Layout>
        </div>
    )
}

export default Talent