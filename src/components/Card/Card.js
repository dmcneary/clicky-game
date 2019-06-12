import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" >
        <a alt={props.name} href={'#' + props.id} onClick={() => props.onClick(props.name, props.message)}>
            { console.log(props) }
            <div className="card-body" style={{
                backgroundImage: props.image ? `url(${require("../../images/" + props.image)})` : "none"
            }}> 
            </div>
        </a>
    </div>
)

export default Card;