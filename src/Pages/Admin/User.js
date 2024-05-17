import React from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import Modal from '../../Components/Modal'
import UserTable from '../../Components/UserTable'

function User() {
    return (
        <div>
            <Layout>
                <LinkHeader many="2" current="User" />
                <div className="m20"></div>
                <div className="container">
                <Modal title=" Add User" id="userModal" >
                    user
                </Modal>
                    <UserTable />
                </div>
            </Layout>
        </div>
    )
}

export default User
