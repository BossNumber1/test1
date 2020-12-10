import React from "react";
import { connect } from "react-redux";
import { createAuth } from "../../redux/actions";
import ImagesIcons from "../ImagesIcons";
import Links from "../Links";
import { Redirect } from "react-router-dom";

function LoginForm({ auth, email, pass, createAuth }) {
    const [password, setPassword] = React.useState("");
    const [emailLocal, setEmail] = React.useState("");
    const [warning, setWarning] = React.useState("");

    const [mail, setMail] = React.useState(false);

    const [change, setChange] = React.useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        if (pass.length === 0 || localStorage.getItem("password")) {
            setWarning("Стоит заполнить все поля");
        } else {
            if (pass.length > 0) {
                if (
                    pass === localStorage.getItem("password") &&
                    email === localStorage.getItem("email")
                ) {
                    createAuth(true);
                } else {
                    setWarning("Стоит проверить верность введённых данных");
                }
            } else {
                createAuth(true);
            }
        }

        if (
            localStorage.getItem("password").length === 0 &&
            pass.length === 0 &&
            (password.length === 0 || emailLocal.length === 0)
        ) {
            setWarning("Стоит заполнить все поля");
        } else {
            if (password.length > 0 || emailLocal.length > 0) {
                if (
                    password === localStorage.getItem("password") &&
                    emailLocal === localStorage.getItem("email")
                ) {
                    createAuth(true);
                } else {
                    setWarning("Стоит проверить верность введённых данных");
                }
            } else createAuth(true);
        }
    };

    const changeInputHandler = (e) => {
        e.preventDefault();
        let n = e.target.name;

        if (n === "email") {
            setEmail(e.target.value);
        } else if (n === "password") {
            setPassword(e.target.value);
        }
    };

    const send_email = (e) => {
        e.preventDefault();
        setMail(true);
        window.open(
            "mailto:dimaang23@gmail.com?subject=`Восстановление пароля`&body=`Вы запросили восстановление пароля`"
        );
    };

    return (
        <>
            {auth === true ? (
                <Redirect to="/my_bookings" />
            ) : (
                <>
                    <form
                        className="login-register-container"
                        onSubmit={submitHandler}
                    >
                        <h1>LOG IN TO YOUR ACCOUNT</h1>

                        {warning.length > 0 && (
                            <div className="alert alert-danger">{warning}</div>
                        )}

                        <div className="input mb-3">
                            <label for="email">EMAIL ADDRESS</label>
                            <div>
                                <input
                                    name="email"
                                    data-role="email"
                                    className="form-control w-100"
                                    value={
                                        localStorage.getItem("email").length > 0
                                            ? localStorage.getItem("email")
                                            : email.length > 0
                                            ? email
                                            : emailLocal
                                    }
                                    onChange={changeInputHandler}
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
                                    value={
                                        localStorage.getItem("password")
                                            .length > 0
                                            ? localStorage.getItem("password")
                                            : pass.length > 0
                                            ? pass
                                            : password
                                    }
                                    onChange={changeInputHandler}
                                />
                            </div>
                        </div>
                        <button
                            className="btn-block mb-4"
                            type="submit"
                            data-role="login"
                        >
                            LOGIN
                        </button>

                        <ImagesIcons />
                        <Links setChange={setChange} />
                    </form>
                    {change === false ? (
                        <div
                            className="modal fade"
                            id="forgot-password"
                            tabIndex="-1"
                            data-role="dialog"
                            aria-labelledby="exampleModalLabel"
                            style={{ display: "none" }}
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" data-role="document">
                                <div className="modal-content">
                                    <form className="modal-body">
                                        <h2>Forgot your password?</h2>
                                        <p>
                                            Enter your account email address
                                            below to reset your password
                                        </p>
                                        <div className="input mt-3 mb-3">
                                            <label htmlFor="forgotEmail">
                                                Email address
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    id="forgotEmail"
                                                    className="form-control w-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="buttons d-flex align-items-center justify-content-between flex-wrap">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button className="btn btn-success">
                                                Request password reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div
                                className="modal fade show"
                                id="forgot-password"
                                tabIndex="-1"
                                data-role="dialog"
                                aria-labelledby="exampleModalLabel"
                                style={{ display: "block", paddingRight: 17 }}
                                aria-modal="true"
                            >
                                <div
                                    className="modal-dialog"
                                    data-role="document"
                                >
                                    <div className="modal-content">
                                        <form className="modal-body">
                                            <h2>Forgot your password?</h2>
                                            <p>
                                                Enter your account email address
                                                below to reset your password
                                            </p>
                                            <div className="input mt-3 mb-3">
                                                <label htmlFor="forgotEmail">
                                                    Email address
                                                </label>
                                                <div className="input-group">
                                                    {mail === false ? (
                                                        <input
                                                            type="text"
                                                            id="forgotEmail"
                                                            className="form-control w-100"
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            id="forgotEmail"
                                                            className="form-control w-100"
                                                            //tut galochka
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="buttons d-flex align-items-center justify-content-between flex-wrap">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-dismiss="modal"
                                                    onClick={() =>
                                                        setChange(false)
                                                    }
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={send_email}
                                                >
                                                    Request password reset
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="backdrop"></div>
                        </>
                    )}
                </>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.init.auth,
        email: state.init.email,
        pass: state.init.pass,
    };
};

const mapDispatchToProps = {
    createAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
