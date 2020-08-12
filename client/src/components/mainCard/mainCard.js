import React from "react";
import { Link } from "react-router-dom";

export default function MainCard(props) {

    return (
        <div className={props.colSize}>
            <div className="card border-primary" >
                <div style={{ fontWeight: "900", fontSize: "xx-large" }} className="card-header">{props.header}</div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.p1}</p>
                    <p className="card-text">{props.p2}</p>
                    <p className="card-text">{props.p3}</p>
                    <p className="card-text">{props.p4}</p>
                    <div className="lead"{...props}>
                    </div>
                </div>
            </div>
        </div>
    )
}