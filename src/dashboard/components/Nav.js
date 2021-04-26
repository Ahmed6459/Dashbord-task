import React from 'react'

import alert from "./alert.png"
import Ellipse from "./Ellipse.png"
import "./Nav.css"


const Nav =()=> {
    return (
        <div id="main-nav">
            <ul>
                <li className="alert">
                    <img src={alert} alt=""/>
                </li>
                <li>
                    <div className="cst-data">
                        <div className="row">
                            <div className="col">
                                <img src={Ellipse} alt=""/>
                            </div>
                            <div className="col">
                            <h3>Anthony Mike</h3>
                            <a href="#">anthony2142@email.com</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Nav
