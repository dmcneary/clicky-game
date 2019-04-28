import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" >
        <a id={props.key} alt={props.name} href={'#' + props.key} onClick={() => props.onClick(props.name)}>
            <div className="card-body" style={{
      backgroundImage: props.image ? `url(${require("../../images/" + props.image)})` : "none"
    }}> 
            </div>
        </a>
    </div>
)

export default Card;