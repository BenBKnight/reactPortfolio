import React from "react";
import MainCard from "../components/mainCard/mainCard";
import CardWithPicture from "../components/cardWithPicture/cardWithPicture";
import raft from "../assets/photos/BEn.jpg"
// import {BrowserRouter as Router } from "react-router-dom"

export default function ContactMe() {

    return (
        <div className="container-fluid">
            <div className="row">
                <MainCard
                    colSize="col"
                    header="Contact Me"
                    title="Let's connect!"
                    p1="I would love the oppertunity to connect, interview, and even show my skills in a technical interview"
                    p2="If you are still tenitive on bringing me in or not, I can promise that there are few that can match my
                work ethic and passion to build."
                    p3=""
                    p4=""
                >
                    <div className="row" style={{ justifyContent: "space-evenly" }}>
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://myautospace.herokuapp.com/", "_blank"))}>GitHub Home</button>
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://www.linkedin.com/in/benjamin-knight-a0b82119b/", "_blank"))}>LinkedIn</button>
                        <button className="btn btn-primary " role="button" onClick={() => (window.open("https://docs.google.com/document/d/18e8PsHAS-QarM_v4TuLnsSjas7HSB2xbSm9CPFxHEE4/edit?usp=sharing", "_blank"))}>Resume</button>
                    </div>
                </MainCard>
                <CardWithPicture
                    colSize="col-md-3"
                    pictureStyle={{ height: "200px", maxWidth: "300px", display: "block" }}
                    header="Final Look"
                    title="Ben Knight"
                    subtitle="Full Stack Developer"
                    belowImg="I've hung up my rafting oars to code for you!"
                    content1="Love to learn new things"
                    content2="Always wanting to improve"
                    content3="Ready to go the extra mile.. Or extra 50!"
                    src={raft}
                    alt="Raft"
                />

            </div>
        </div>
    )
};