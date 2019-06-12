import React from "react";

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid d-block">
      <div className="container">
        <h1 className="display-4"> {props.cyclistName} </h1>
        <p className="lead"> {props.message} </p>
      </div>
    </div>
)

export default Jumbotron;