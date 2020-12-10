import React from "react";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import RegForm from "./components/registr/RegForm";
import MyBookings from "./components/MyBookings";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <section className="login-register">
                <div className="container d-flex justify-content-center">
                    <Switch>
                        <Route exact path="/login" component={LoginForm} />
                        <Route
                            exact
                            path="/create_account"
                            component={RegForm}
                        />
                        <Route
                            exact
                            path="/my_bookings"
                            component={MyBookings}
                        />
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
            </section>
        </Router>
    );
}

export default App;
