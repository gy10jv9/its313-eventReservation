import React, { useEffect, useState } from "react"
import Nav_Home from "./Nav-Home"
import Nav_Reservations from "./Nav-Reservations"
import Nav_About from "./Nav-About"
import "./SideNav.css"

const SideNav = () => {  
    return (
        <div className="d-none d-md-flex d-sm-none d-xs-none col-lg-2 container-sideNavs">
            <div className="sideNavs sideNavs-header">
                <div className="container-logo">
                    <div className="logo-lccb"></div>
                    <div className="d-none d-lg-flex d-md-none container-txt">
                        <h1> PPGS </h1>
                        <h2> Venue Reservations </h2>
                    </div>
                </div>
            </div>

            <div className="sideNavs">
                <Nav_Home/>
                <Nav_Reservations/>
                <Nav_About/>
            </div>
        </div>
    )
}

export default SideNav