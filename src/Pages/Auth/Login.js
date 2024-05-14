import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SuccessIcon from '../../Assets/image/Illustration.png'
import axios from 'axios'
import { REACT_APP_AUTH_BASE_URL } from '../../Utils/Urls';

function Login() {
    const successRef = useRef(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [className, setClassName] = useState("");

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    }

    const navigate = useNavigate();

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    async function handleLogin(e) {
        e.preventDefault();

        if (!password || !email) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                email,
                password
            }
            axios.post(`${REACT_APP_AUTH_BASE_URL}/login`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(false)
                        setClassName("")
                        successRef.current.click()
                        setSuccessMessage(data.message)
                        localStorage.setItem('userLoggedIn', true);
                        localStorage.setItem('nvm', data.data.token);
                        const timerId = setTimeout(() => {
                            navigate('/app');
                            window.location.reload();

                        }, 4000);

                        return () => clearTimeout(timerId);

                    } else if (data.status === false){
                        setClick(true)
                        setClassName("alert__message error")
                        setMessage(data.message)
                        setSpin(false)
                        Clearer()
                    }
                }).catch((e)=>{
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
        <div className='auth '>
                 <div className=''>
                    <div class="modal fade" id="loginSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body AlertModal p-3">
                                    <center>
                                        <img src={SuccessIcon} alt="" className='w-20 mb-3' />
                                        <p>{successMessage}</p>

                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="" data-bs-toggle="modal" data-bs-target="#loginSuccess" ref={successRef} style={{ display: 'none' }}>
                    </button>
                </div>
            <section class="form__section p-5">
                <div class="container form__section-container p-5">
                    <center className='mb-4'><h2>Sign In</h2></center>
                    {click ? <div className={className}>
                            <p>{message}</p>
                        </div> : ""}
                    <form className="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control inputts" id="floatingInput3"  onChange={(e) => setEmail(e.target.value)}  placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control inputts" id="floatingInput4" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={handleLogin} >
                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Sign In
                        </button>
                        <small>Don't have an account ? <Link to="/auth/register"> <span>Sign Up</span></Link> </small>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login