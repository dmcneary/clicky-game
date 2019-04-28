import React from "react";
import "./Navbar.css"

const Navbar = props => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div>
            <ul>
                <li className="itemLeft">
                    <h3>12 Cycling</h3>
                    <h3>Greats</h3>
                </li>
                <li className="itemCenter">
                    <span class="score">Your Score:{ props.score } | Top score: { props.topScore }</span>
                </li>
                <li className="itemRight">
                    <span class="status">{ props.status }</span>
                </li>
            </ul>
        </div>
    </nav>
    )

export default Navbar;