import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(user);

        axios.post("/api/login", user, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.props.setUser({
                        isAuthenticated: true,
                        username: res.data.username
                    });
                    this.setState({ redirectTo: "/" });
                }
            });
    }

    canSubmit() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    render() {
        if (this.state.redirectTo) return <Redirect to={{ pathname: this.state.redirectTo }} />;
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" disabled={!this.canSubmit()}/>
                    </div>
                </form>
            </div>
        );
    }
}