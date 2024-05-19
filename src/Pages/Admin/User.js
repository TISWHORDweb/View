import React from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import UserTable from '../../Components/UserTable'

function User() {
    return (
        <div>
            <Layout>
                <LinkHeader many="2" current="User" />
                <div className="m20"></div>
                <div className="container">
                    <UserTable />
                </div>
            </Layout>
        </div>
    )
}

export default User
