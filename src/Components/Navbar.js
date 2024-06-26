import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { REACT_APP_USER_BASE_URL } from '../Utils/Urls';
import { Link, useNavigate } from 'react-router-dom'
import { Check } from '../Utils/Core'
import { MyContext } from '../context/Context';

function Navbar(props) {
  const { talentList } = useContext(MyContext)
  const [check, setCheck] = useState()
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
      "v-token": token
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
      navigate('/')
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
      <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-body AlertModal p-5">
              <div className=''>
                <section class="">
                  <div class="container ">
                    <div class="justify-content-space mb-3">
                      <h3 className='mb-3 f20'>Create contact</h3>
                      <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                    </div>
                    {click ? <div className={className}>
                      <p>{message}</p>
                    </div> : ""}
                    <form className="">
                      {talentList?
                        <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Your Talent</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setName(e.target.value)} aria-label="Default select example">
                          <option  ><span>select</span></option>
                          {talentList.map((each, i) => (
                            <option value={each.name} ><span>{each.name}</span></option>
                          ))}
                        </select>
                      </div> : <></>}
                      <div class="form-floating mb-3">
                        <input type="number" class="form-control inputts" id="floatingInput11" onChange={(e) => setAge(e.target.value)} placeholder="18" />
                        <label for="floatingInput">Age</label>
                      </div>
                      <small>Your socials</small>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput22" onChange={(e) => setFacebook(e.target.value)} placeholder="John Doe" />
                        <label for="floatingInput">Facebook</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput33" onChange={(e) => setTwitter(e.target.value)} placeholder="@john" />
                        <label for="floatingInput">Twitter </label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput11" onChange={(e) => setTiktok(e.target.value)} placeholder="@doeJ" />
                        <label for="floatingInput">Tiktok</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput22" onChange={(e) => setSnapchat(e.target.value)} placeholder="@DJ" />
                        <label for="floatingInput">Snapchat</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control inputts" id="floatingInput33" onChange={(e) => setYoutube(e.target.value)} placeholder="@DoeJohn" />
                        <label for="floatingInput">Youtube </label>
                      </div>
                      <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" onClick={HandleCreate}>
                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                        Sign up
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
                <span class="navbar-brand" href="/">SBTV</span>
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/">
                      <span class={`nav-link ${props.color}`} aria-current="page" >Home</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/app/video/all">
                      <span class={`nav-link ${props.color}`}  >Videos</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <span class={`nav-link ${props.color}`} aria-current="page" >About us</span>
                  </li>
                </ul>
                <div className="animate__animated animate__fadeInRight">
                  {check === "true" ?
                    <button class="bn632-hover bn21" type="submit" data-bs-toggle="modal" data-bs-target="#createModal">Sign up as Talent</button> :
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