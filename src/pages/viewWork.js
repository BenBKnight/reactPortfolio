import React from "react";
import MainCard from "../components/mainCard/mainCard"
// import {BrowserRouter as Router } from "react-router-dom"
import { Link } from "react-router-dom";
import "./style.css"

export default function ViewWork() {

    return (
        <>
            <div className="row">
                <MainCard
                    colSize="col-sm"
                    header="MyAutoSpace -- React.js"
                    title="React Car Maintenance App"
                    p1="MyAutoSpace is the crowning jewel of my Full-Stack Course. I became intimate with React.js during this
                project. Unfortunately, the majority of my group was burnt out and therefore, not contributing much. 
                I wanted to end the course as strong as possible, resulting in refactoring a previous application by myself."
                    p2="Skills: Refactoring, React.js, MVC, JWT(Authentication)"

                >
                    <div className="centerAlign">
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://agile-caverns-07594.herokuapp.com/", "_blank"))}>Deployed Application</button>
                        <button className="btn btn-primary floatRight" role="button" onClick={() => (window.open("https://github.com/BenBKnight/myAutoSpace", "_blank"))}>GitHub Repository</button>
                    </div>
                </MainCard>
                <MainCard
                    colSize="col-sm"
                    header="CarFacts -- MVC/SQL"
                    title="Car App"
                    p1="CarFacts was the pioneer of MyAutoSpace. This was the first project that intregrated databases, Model-
                View-Controller concepts, and full-stack application. I loved seeing this project come to life and knowing that
                I can make a living off projects like this."
                    p2="Skills: SQL, HandleBars, MVC, Authentication(Passport)"

                >
                    <div className="centerAlign">
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://floating-stream-06188.herokuapp.com/", "_blank"))}>Deployed Application</button>
                        <button className="btn btn-primary floatRight " role="button" onClick={() => (window.open("https://github.com/BenBKnight/carFacts", "_blank"))}>GitHub Repository</button>
                    </div>
                </MainCard>
                <MainCard
                    colSize="col-sm"
                    header="Employee Tracker -- React.js"
                    title="Employee Tracking sorting and tracking app"
                    p1="This was a fun and challenging application. This is when my love and enjoyment for React.js
                    began. It was an oppertunity to utilize the modularity and freedom of React.js. After an entire course of 
                    learning basics, it was exciting to learn a fresh language that was so robust and intricate."
                    p2="Skills: React.js"
                >
                    <div className="centerAlign">
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://benbknight.github.io/employeeTracker/", "_blank"))}>Deployed Application</button>
                        <button className="btn btn-primary floatRight" role="button" onClick={() => (window.open("https://github.com/BenBKnight/employeeTracker", "_blank"))}>GitHub Repository</button>
                    </div>
                </MainCard>

            </div>
            <br />
            <div className="row">
                <MainCard
                    colSize="col-sm"
                    header="strtUP -- Axios, JQuery"
                    title="Dashboard App"
                    p1="This was the first project of my course. The purpose of this project was to practice getting 
                information from api's. The requirement was for the group to use 2. My group decided to do two each. 
                This was especailly helpful because not only did I gain experience writing my own code for API calls, but
                I was able to see how three similarly skilled developers wrote theirs."
                    p2="Skills: Axios, JQuery, numerous libraries"
                >
                    <div className="centerAlign">
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://brentp24.github.io/strtUP/", "_blank"))}>Deployed Application</button>
                        <button className="btn btn-primary floatRight" role="button" onClick={() => (window.open("https://github.com/brentp24/strtUP", "_blank"))}>GitHub Repository</button>
                    </div>
                </MainCard>
                <MainCard
                    colSize="col-sm"
                    header="Fitness Tracker -- MongoDB, Mongoose"
                    title="Fitness Tracking App"
                    p1="The Fitness Tracker was a challenenging assignment. It was an introduction into MongoDB/NoSQL database. I
                    really enjoyed utilizing the aspects of a NoSQL database and look forward to deeper dives with similar 
                    databases."
                    p2="Skills: MongoDB Mongoose"
                >
                    <div className="centerAlign">
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://secret-sierra-53610.herokuapp.com/", "_blank"))}>Deployed Application</button>
                        <button className="btn btn-primary floatRight" role="button" onClick={() => (window.open("https://github.com/BenBKnight/workOutTracker", "_blank"))}>GitHub Repository</button>
                    </div>
                </MainCard>
                <MainCard
                    colSize="col-sm"
                    header="Portfolio -- React.js"
                    title="This Portfolio"
                    p1="I really do enjoy React.js. It is powerful, modular, and so intriging. I would love to keep utilizing
                    it in the future. Although, I am open to all oppertunities that allow me to create any sort of applications."
                    p2="Skills: React.js"
                >
                    <div className="centerAlign">
                        <Link className="btn btn-primary " role="button" to="/">Deployed Application</Link>
                        <button className="btn btn-primary floatRight" role="button" onClick={() => (window.open("https://github.com/BenBKnight/reactPortfolio", "_blank"))}>GitHub Repository</button>
                    </div>
                </MainCard>
            </div>
            <br />
            <div className="row" style={{ justifyContent: "center" }}>
                <Link className="btn btn-success btn-lg" to="/contactMe" role="button">I'm convinced, Let's talk.</Link>
            </div>
        </>
    )
};