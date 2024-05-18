import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import News from '../../Components/News'
import BannerHeader from '../../Components/BannerHeader'
import LogOut from '../../Components/LogOut'

function Dashboard() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <BannerHeader />
                    <Card />
                    <News />
                    <LogOut />
                </div>
            </Layout>
        </div>
    )
}

export default Dashboard
