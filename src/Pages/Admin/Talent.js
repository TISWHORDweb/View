import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import TalentTable from '../../Components/TalentTable'
import { REACT_APP_ADMIN_BASE_URL } from '../../Utils/Urls'
import axios from 'axios'

function Talent() {
    const [talents, setTalents] = useState([])
    const [token, setToken] = useState()


    useEffect(() => {
        const Data = localStorage.getItem('nvm');
        if (Data) {
            setToken(Data)
        }
    }, [])

    useEffect(() => {
        if (token) {
            const url = `${REACT_APP_ADMIN_BASE_URL}/talent/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "v-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setTalents(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token]);

    return (
        <div>
            <Layout>
                <LinkHeader many="2" current="Talent" />
                <div className="m20"></div>
                <div className="container">
                    <TalentTable talent={talents} />
                </div>
            </Layout>
        </div>
    )
}

export default Talent