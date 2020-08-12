import React from "react";
import CardWithPicture from "../components/cardWithPicture/cardWithPicture";
import MainCard from "../components/mainCard/mainCard";
import SideCard from "../components/sideCard/sideCard";
import portrait from "../assets/photos/BenKChop.jpg";
import { Link } from "react-router-dom";
// import {BrowserRouter as Router } from "react-router-dom"

export default function AboutMe(props) {
    const skillData = [
        {
            desc: "HTML & CSS:",
            points: "9/10"
        }, {
            desc: "JavaScript:",
            points: "9/10"
        }, {
            desc: "React.js:",
            points: "9/10"
        }, {
            desc: "Express/Node:",
            points: "8/10"
        }, {
            desc: "MySQL & Sequelize:",
            points: "8/10"
        }, {
            desc: "MongoDB & Mongoose:",
            points: "7/10"
        }, {
            desc: "More to Come!",
            points: "10/10"
        }
    ]
    return (
        <div className="row">
            <CardWithPicture
                colSize="col-md-3"
                pictureStyle={{ height: "200px", maxWidth: "200px", display: "block" }}
                header="Quick Look"
                title="Ben Knight"
                subtitle="Full Stack Developer"
                belowImg=""
                content1="From: Salt Lake, Utah"
                content2="Proven Work Ethic"
                content3="Passion for Development"
                src={portrait}
                alt="Portrait"
            />
            <MainCard
                colSize="col"
                header="Background"
                title="A history of hard work and perseverance"
                p1="I started working at the age of 10. My father lost his job and 
                    he fell on his backup plan, a pizza restuarant he had started with my uncles. 
                    Money and time were tight, I was asked to join the resturaunt staff. At the age of 
                    14, the restaurant went under and we moved into one of my grandfather's rental properties. 
                    The agreement was our family would pay off the due rent by helping with maintenance. Since 
                    I was the only one without an actual job, I fulfilled most of the agreement."
                p2="I gained numerous invauable traits from my experiences, two most of all being working hard and
                    passion to create."
                p3='One of truest passions is creating. I love being able to learn how something is made, and making
                    it myself. This goes from my own "Tiny Home," furniture, jewelry, metal scupltures, and now, coding.'
                p4="I know that my can-do-attitude, relentless determination, ambition, and passion for coding will help
                    you and your company"
            >
                <Link className="btn btn-primary " to="/viewWork" role="button">Show Me!</Link>
            </MainCard>
            <SideCard
                colSize="col-sm-3"
                header="Skills"
                givenData={skillData}
            />
        </div>
    )
};