import React from "react";

const Jumbotron = props => (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4"> {props.cyclistName} </h1>
    <p class="lead"> {props.message} </p>
  </div>
</div>
)

export default Jumbotron;