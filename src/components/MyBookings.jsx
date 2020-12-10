import React from "react";
import { connect } from "react-redux";
import { createAuth } from "../redux/actions";
import { Redirect } from "react-router-dom";

function MyBookings({ auth, createAuth }) {
    const logout = (e) => {
        e.preventDefault();
        createAuth(false);
    };

    return (
        <>
            {auth === false ? (
                <Redirect to="/login" />
            ) : (
                <>
                    <div className="container mt-5">
                        <h1>Привет, {localStorage.getItem("name")}</h1>
                    </div>
                    <div className="container mt-3">
                        <button className="logoutBtn" onClick={logout}>
                            Выход
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.init.auth,
    };
};

const mapDispatchToProps = {
    createAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBookings);
