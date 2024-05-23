import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import News from '../../Components/News'
import BannerHeader from '../../Components/BannerHeader'
import LogOut from '../../Components/LogOut'
import { MyContext } from '../../context/Context'
import Loader from '../../Components/Loader'

function Dashboard() {
    const { insight } = useContext(MyContext);
    return (
        <div>
            {insight ?
                <Layout>
                    <div className="container">
                        <BannerHeader insight={insight} />
                        <Card insight={insight} />
                        <News />
                        <LogOut />
                    </div>
                </Layout> :
                <Loader />
            }
        </div>
    )
}

export default Dashboard
