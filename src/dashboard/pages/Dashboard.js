import React from 'react'
import Nav from '../components/Nav'
import BodyOfDashboard from './BodyOfDashboard'

import "./Dashboard.css"

const Dashboard = (props)=> {
    return (
        <div id="dashboard">
            {/* <Nav/> */}
            <BodyOfDashboard info = {props.info}/>
        </div>
    )
}

export default Dashboard;
