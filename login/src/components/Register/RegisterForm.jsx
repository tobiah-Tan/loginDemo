import React, {Component} from 'react';
import './index.css'
import classname from "classname";
import {NavLink,Route,withRouter} from 'react-router-dom';
import Logon from "../Logon";

class RegisterForm extends Component {
    state={
        userInfo:{
            username:'',
            email:'',
            password:'',
            passwordConfirm:'',
        },
        errMsg:[]
    };

    handleSubmit = async e => {
        // 取消事件的默认操作preventDefault
        e.preventDefault();
        this.setState({errMsg: []});
        const {data} = await this.props.registerFn.registerAc(this.state.userInfo);
        // console.log(data);
        // console.log(this.props.registerData.name);
        alert(data.msg)
        if (data.status === 1) {
            return this.setState({
                errMsg: data.msg,
            });
        }
        this.props.history.push('/logon');

        //========test==========
        // this.props.registerFn.registerAc();
        // console.log(this.props.registerData.name);
    };

    handleChange= e =>{
        this.setState({
            userInfo:{
                //扩展运算符，将原来的信息提取过来
                ...this.state.userInfo,
                //key:value
                //属性名不是name，是name变量中的值
                [e.target.name]:e.target.value
            }
        })
    };

    render() {
        const {username,email,password,passwordConfirm} = this.state;
        const {errMsg} = this.state;
        return (
            <div id="register-box">
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
                    <p id="welcome-slogan">Welcome to the pages of Register!</p>
                </div>
                <div id="register-container">
                    <form id="register-input-form"  onSubmit={this.handleSubmit}>
                        <div id={"input-block"}>
                            <label id="input-label" htmlFor="username">Username</label>
                            <input id="input-username-text" className={classname({"is-invalid":errMsg[0]==="username"})} type="text" autoComplete={"username"} defaultValue={username} name="username" onChange={this.handleChange} />
                            <small id="input-warning-info">{errMsg[0]==="username" && errMsg[1]}</small><br/><br/>

                        </div>
                        <div id={"input-block"}>
                            <label id="input-label" htmlFor="email">Email</label>
                            <input id="input-email-text" className={classname({"is-invalid":errMsg[0]==="email"})} type="text" autoComplete={"email"} defaultValue={email} name="email" onChange={this.handleChange} />
                            <small id="input-warning-info">{errMsg[0]==="email" && errMsg[1]}</small><br/><br/>
                        </div>
                        <div id={"input-block"}>
                            <label id="input-label" htmlFor="password">Password</label>
                            <input id="input-password-text" className={classname({"is-invalid":errMsg[0]==="password"})} type="password" autoComplete={"new-password"} defaultValue={password} name="password" onChange={this.handleChange}/>
                            <small id="input-warning-info">{errMsg[0]==="password" && errMsg[1]}</small><br/><br/>
                        </div>
                        <div id={"input-block"}>
                            <label id="input-label" htmlFor="passwordConfirm">PasswordConfirm</label>
                            <input id="input-password-confirm" className={classname({"is-invalid":errMsg[0]==="passwordConfirm"})} type="password" autoComplete={"new-password"} defaultValue={passwordConfirm} name="passwordConfirm" onChange={this.handleChange}/>
                            <small id="input-warning-info">{errMsg[0]==="passwordConfirm" && errMsg[1]}</small><br/><br/>
                        </div>
                        <input id="register-submit-btn" type="submit" name="commit" value="Sign   Up"/>
                    </form>
                    <p id="create-account-block">
                        <NavLink to="/Logon">Back Logon</NavLink>
                    </p>
                    <Route exact path="/Logon" component={Logon}/>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterForm)