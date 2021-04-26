import React from 'react'
import RightCards from '../components/RightCards'
import TableData from '../components/TableData'
import TopCards from '../components/TopCards'

import "./BodyOfDashboard.css"

const BodyOfDashboard=(props)=> {
    return (
        <div id="dashboard-body" className="row" style={{marginLeft:"0"}}>
            <div className="col-lg-8 col-12">
                <TopCards/>
                <TableData info={props.info}/>
            </div>
            <div className="col-4 d-none d-lg-block d-xl-block">
                <RightCards/>
            </div>
        </div>
    )
}

export default BodyOfDashboard
