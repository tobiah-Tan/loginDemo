import React, {Component} from 'react';

export default class Register extends Component {
    render() {
        return (
            <div>
                <h2>Register</h2>
                <input type="text" placeholder={"username"}/><br/><br/>
                <input type="password" placeholder={"password"}/><br/><br/>
                <input type="submit" name="register"/>
            </div>
        );
    }
}
