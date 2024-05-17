import React from 'react'
import Layout from '../../Components/Layout'
import LinkHeader from '../../Components/LinkHeader'
import Modal from '../../Components/Modal'
import TalentTable from '../../Components/TalentTable'

function Talent() {
  return (
    <div>
               <Layout>
                <LinkHeader many="2" current="Talent" />
                <div className="m20"></div>
                <div className="container">
                <Modal title=" Add Talent" id="talentModal" >
                    Talent
                </Modal>
                    <TalentTable />
                </div>
            </Layout>
    </div>
  )
}

export default Talent