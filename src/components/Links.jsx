import React from "react";
import { NavLink } from "react-router-dom";

function Links({ setChange }) {
    return (
        <div className="links d-flex align-items-center justify-content-center flex-wrap mt-2">
            <a
                href="#forgotPassword"
                dataToggle="modal"
                dataTarget="#forgotPassword"
                onClick={() => setChange(true)}
            >
                forgot password?
            </a>
            <span>|</span>
            <NavLink to="/create_account">create an account</NavLink>
        </div>
    );
}

export default Links;
