import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { REACT_APP_USER_BASE_URL } from '../../Utils/Urls';
import { Link } from 'react-router-dom'

function Tables() {
    const [token, setToken] = useState()
    const [contact, setContact] = useState([])

    useEffect(() => {
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [])

    useEffect(() => {
        if (token) {
            const url = `${REACT_APP_USER_BASE_URL}/contact/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "r-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setContact(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token]);


    return (
        <div className='container'>
            <div className="header secondaryBg p-3">
                <h2 className='m-0'>Contacts</h2>
            </div>
            <div className="Table">
                <div className="table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.length > 0 ? <>
                                {contact.map((each, i) => (
                                    <tr key={i} className='role'>
                                        <th>{each.cid}</th>
                                        <td>{each.firstName}</td>
                                        <td>{each.lastName}</td>
                                        <td>{each.phone}</td>
                                        <td className='view'>
                                        <Link to={`/app/contact/view/${each.cid}`}><li className='btnNoBg'> View</li></Link>
                                        </td>
                                    </tr>
                                ))}
                            </>
                                :
                                <tr>
                                    <th>...</th>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td className=''>
                                        ...
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tables