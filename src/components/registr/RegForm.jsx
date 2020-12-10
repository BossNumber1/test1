import React from "react";
import { connect } from "react-redux";
import {
    createAuth,
    createLogin,
    createPass,
    createEmail,
} from "../../redux/actions";
import { Redirect } from "react-router-dom";

function RegForm({ auth, createAuth, createLogin, createPass, createEmail }) {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailLocal, setEmail] = React.useState("");
    const [warning, setWarning] = React.useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        if (
            name.length === 0 ||
            password.length === 0 ||
            emailLocal.length === 0
        ) {
            setWarning("Стоит заполнить все поля");
        } else {
            let resultData = {
                name,
                password,
                emailLocal,
            };

            console.log(resultData);

            createAuth(true);
            createLogin(name);
            createPass(password);
            createEmail(emailLocal);

            localStorage.setItem("name", name);
            localStorage.setItem("password", password);
            localStorage.setItem("email", emailLocal);

            setName("");
            setPassword("");
            setEmail("");
            setWarning("");
        }
    };

    const changeInputHandler = (e) => {
        e.preventDefault();
        let n = e.target.name;

        if (n === "name") {
            setName(e.target.value);
        } else if (n === "password") {
            setPassword(e.target.value);
        } else {
            setEmail(e.target.value);
        }
    };

    return (
        <>
            {auth === true ? (
                <Redirect to="/my_bookings" />
            ) : (
                <form
                    className="login-register-container"
                    onSubmit={submitHandler}
                >
                    <h1>CREATE AN ACCOUNT</h1>

                    {warning.length > 0 && (
                        <div className="alert alert-danger">{warning}</div>
                    )}

                    <div className="input mb-3">
                        <label for="name">NAME</label>
                        <div>
                            <input
                                name="name"
                                data-role="name"
                                className="form-control w-100"
                                onChange={changeInputHandler}
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="input mb-4">
                        <label for="password">PASSWORD</label>
                        <div>
                            <input
                                name="password"
                                data-role="password"
                                type="password"
                                className="form-control w-100"
                                onChange={changeInputHandler}
                                value={password}
                            />
                        </div>
                    </div>
                    <div className="input mb-3">
                        <label for="email">EMAIL ADDRESS</label>
                        <div>
                            <input
                                name="email"
                                data-role="email"
                                className="form-control w-100"
                                onChange={changeInputHandler}
                                value={emailLocal}
                            />
                        </div>
                    </div>
                    <div className="input mb-3">
                        <label for="city">YOUR CITY</label>
                        <div className="input-group">
                            <select className="form-control" id="city">
                                <option>London</option>
                                <option>London</option>
                                <option>London</option>
                                <option>London</option>
                                <option>London</option>
                                <option>London</option>
                                <option>London</option>
                                <option>London</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="btn-block mb-4"
                        type="submit"
                        data-role="login"
                    >
                        CREATE MY ACCOUNT
                    </button>
                    <p className="lead text-center mt-3">
                        by creating an account, you agree to{" "}
                        <a href="/#">our terms</a> and conditions and{" "}
                        <a href="/#">privacy policy</a>
                    </p>
                </form>
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
    createLogin,
    createPass,
    createEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
