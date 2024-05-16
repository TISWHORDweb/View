import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { REACT_APP_USER_BASE_URL } from '../Utils/Urls';
import { Link, useNavigate } from 'react-router-dom'
import { Check } from '../Utils/Core'

function Navbar(props) {
  const [check, setCheck] = useState()
  const [token, setToken] = useState()
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [click, setClick] = useState(false);
  const [spin, setSpin] = useState(false);
  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");

  useEffect(() => {
    const Checked = Check()
    setCheck(Checked)
    const Data = localStorage.getItem('nvm');
    if (Data) {
      setToken(Data)
    }
  }, [])

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "r-token": token
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

  const Nav = () => {
    const timerId = setTimeout(() => {
       navigate('/app/contact')
       window.location.reload();
    }, 3000);

    return () => clearTimeout(timerId);
}

  const HandleCreate = ((e) => {
    e.preventDefault();

    if (!lastName || !firstName || !phone) {
      setClick(true)
      setClassName("alert__message error")
      setMessage("Fill all fields and try again")
      Clearer()
    } else {
      setSpin(true)
      const body = {
        lastName,
        firstName,
        phone
      }

      axios.post(`${REACT_APP_USER_BASE_URL}/contact/create`, body, axiosConfig)
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
      <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-body AlertModal p-5">
              <div className=' '>
                <section class="">
                  <div class="container ">
                    <center className='mb-4'><h2>Create contact</h2></center>
                    {click ? <div className={className}>
                      <p>{message}</p>
                    </div> : ""}
                    <form className="">
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput11" onChange={(e) => setFirstname(e.target.value)} placeholder="name@example.com" />
                        <label for="floatingInput">First Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput22" onChange={(e) => setLastname(e.target.value)} placeholder="Password" />
                        <label for="floatingInput">Last Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="Number" class="form-control inputts" id="floatingInput33" onChange={(e) => setPhone(e.target.value)} placeholder="name@example.com" />
                        <label for="floatingInput">Phone Number</label>
                      </div>
                      <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleCreate}>
                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                        Create
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <Link to="/">
              <span class="navbar-brand" href="#">VIEW</span>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/">
                    <span class={`nav-link ${props.color}`}  aria-current="page" >Home</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <span class={`nav-link ${props.color}`} aria-current="page" >Videos</span>
                </li>
                {check === "true" ?
                  <li class="nav-item">
                    <Link to="/app/contact">
                      <span class={`nav-link ${props.color}`}  >Contact</span>
                    </Link>
                  </li> : <></>}
                
                <li class="nav-item">
                  <span class={`nav-link ${props.color}`}  aria-current="page" >About us</span>
                </li>
              </ul>
              <div className="animate__animated animate__fadeInRight">
                {check === "false" ?
                  <button class="bn632-hover bn21" type="submit" data-bs-toggle="modal" data-bs-target="#createModal">Create Contact</button> :
                  <Link to="/auth/login">  <button class="bn632-hover bn21" type="submit">Get Started</button></Link>}
              </div>
            </div>
          </div>
        </nav>
      </div>
      </div>
    </div>
  )
}

export default Navbar