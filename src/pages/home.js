import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Ben Knight</h1>
                <h1 className="display-5">Your Next Developer</h1>
                <hr className="my-4" />
                <p>Thank you in advance for looking at my portfolio,</p>
                <p>Let me show you why I will your best hire</p>
                <p className="lead">
                    <Link className="btn btn-primary " to="/aboutMe" role="button">Prove it!</Link>
                </p>
            </div>
        </div>
    )
};