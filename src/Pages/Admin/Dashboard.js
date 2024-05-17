import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import News from '../../Components/News'
import BannerHeader from '../../Components/BannerHeader'

function Dashboard() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <BannerHeader />
                    <Card />
                    <News />
                </div>
            </Layout>
        </div>
    )
}

export default Dashboard
