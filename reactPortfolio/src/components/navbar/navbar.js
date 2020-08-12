// import React, { NavBar } from "react"
import { Link } from "react-router-dom";
import "../../App.css"
import React from 'react'


export default function NavigationBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutMe">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactMe">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/viewWork">View My Work</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
        </>

    )
}

