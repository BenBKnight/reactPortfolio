import React from "react";
// import { useEffect } from "react";
// import {BrowserRouter as Router } from "react-router-dom"
// { maxWidth: "20%" }
export default function CardWithPicture(props) {
    return (
        <div className={props.colSize} style={props.width}>
            <div className="card mb-3"  >
                <h3 className="card-header">{props.header}</h3>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle text-muted">{props.subtitle}</h6>
                </div>
                <div style={{ alignSelf: "center" }}>
                    <img style={props.pictureStyle} src={props.src} alt={props.alt}></img>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.belowImg}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.content1}</li>
                    <li className="list-group-item">{props.content2}</li>
                    <li className="list-group-item">{props.content3}</li>
                </ul>
                <div>
                    {props.mainContent}
                </div>
                <div {...props}>

                </div>
            </div>
        </div>
    )
};