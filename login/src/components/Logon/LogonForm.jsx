import React, {Component} from "react";
import {NavLink,Route} from "react-router-dom";
import "./index.css";
import Register from "../Register";
// import axios from "../../utils/request";
import decode from "jwt-decode";

export default class LogonForm extends Component {

    state = {
        userInfo: {
            username:'',
            password:'',
        }
    };

    handleSubmit = async e =>{
        e.preventDefault();
        const { data } = await this.props.logonFn.logonAc(this.state.userInfo);
        // console.log(data);
        alert(data.msg)
        if(data.status === 0){
            //同步用户信息和用户状态到redux
            this.props.logonFn.syncInfoAc(decode(data.token));
        }
    };

    handleChange = e =>{
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                [e.target.name]: e.target.value,
            }
        })
    };
    render() {
        const {username, password} = this.state.userInfo;
        return (
            <div id="logon-container">
                <div id="logo-box">
                    <svg d="1625815721089" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2688" width="200" height="200">
                        <path
                            d="M345.409824 149.030692h49.227333V239.393193H345.409824z" fill="#C7C45D" p-id="2689"/>
                        <path
                            d="M370.02349 266.367074a269.738809 269.738809 0 0 0 186.456952-82.60751A256.589042 256.589042 0 0 0 635.04187 0a271.424677 271.424677 0 0 0-186.119778 82.944684A257.263389 257.263389 0 0 0 370.02349 266.367074z"
                            fill="#7AA63B" p-id="2690"/>
                        <path
                            d="M656.620975 618.039046l-2.023041-5.731949-101.152054-290.980741a193.537596 193.537596 0 0 0-370.890862 0l-101.152054 290.980741-2.023041 5.731949a305.816375 305.816375 0 1 0 578.252572 0z"
                            fill="#637542" p-id="2692"/>
                        <path
                            d="M690.675499 1022.984433h-276.145105a168.586756 168.586756 0 0 1-107.895524-306.153548l211.070618-168.586756 4.046082-3.371735a269.738809 269.738809 0 1 1 168.586756 479.12356z"
                            fill="#BAC252" p-id="2693"/>
                        <path
                            d="M919.616314 674.347023a244.787969 244.787969 0 0 0-383.029109-110.592912l-8.429338 6.74347L321.470505 735.038255a146.333304 146.333304 0 0 0 92.048368 264.006859h276.819453a244.787969 244.787969 0 0 0 229.277988-324.698091z"
                            fill="#EDE67A" p-id="2694"/>
                        <path
                            d="M504.814953 818.936317a117.336382 147.007651 70.59 1 0 277.304845-97.708855 117.336382 147.007651 70.59 1 0-277.304845 97.708855Z"
                            fill="#BF7A3D" p-id="2695"/>
                        <path
                            d="M294.833797 332.790256m-46.529944 0a46.529945 46.529945 0 1 0 93.059889 0 46.529945 46.529945 0 1 0-93.059889 0Z"
                            fill="#7A993B" p-id="2696"/>
                    </svg>
                    {/*<p id="welcome-slogan">Welcome U</p>*/}
                </div>
                <div id="logon-box-container">
                    <h2 id="logon-title">Login</h2>
                    <form id="logon-input-form" action="/session" onSubmit={this.handleSubmit}>
                        <div id={"input-block"}>
                            <label htmlFor="username"/>
                            <input id="logon-input-username-text" type="text" autoComplete={"username"}
                                   name={"username"}
                                   defaultValue={username}
                                   onChange={this.handleChange}
                                   placeholder={"Username"}/><br/><br/>
                            <small></small>
                        </div>
                        <div id={"logon-input-block"}>
                            <a id="password-reset-hyperlink" href="/password-reset">Forget Password?</a>
                            <input id="logon-input-password-text" type="password" autoComplete={"password"}
                                   name={"password"}
                                   defaultValue={password}
                                   onChange={this.handleChange}
                                   placeholder={"Password"}/><br/><br/>
                        </div>
                        <input id="logon-submit-btn" type="submit" name="commit" value="Sign   in"/>
                    </form>
                    <p id="logon-create-block">
                        No account?
                        {/*<a href="/#">Click here to Create!</a>*/}
                        <NavLink to="/register">Click here to Create!</NavLink>
                    </p>
                    <div>
                        <Route exact path="/register" component={Register}/>
                    </div>
                </div>

            </div>
        );
    }
}
