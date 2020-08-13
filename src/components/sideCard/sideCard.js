import React, { useEffect } from "react";
// import { useEffect } from "react";
// import {BrowserRouter as Router } from "react-router-dom"

export default function SideCard(props) {
    useEffect(() => {
        console.log(props)
    })
    return (
        <div className={props.colSize}>
            <div className="card mb-3"  >
                <h3 className="card-header">{props.header}</h3>
                <ul className="list-group list-group-flush" >
                    {props.givenData.map((data, index) => (
                        <li key={index} style={{ width: "100%", listStyleType: "none", padding: "0 .2rem .5rem .2rem" }}>
                            {data.desc}
                            <span style={{ float: "right" }}>
                                {data.points}
                            </span>
                        </li>
                    ))}
                    <li className="list-group-item">{props.content1}</li>
                </ul>
            </div>
        </div>
    )
};