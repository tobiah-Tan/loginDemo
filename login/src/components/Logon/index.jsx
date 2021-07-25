import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {actionCreators as logonActionCreactors} from './store';
import LogonForm from "./LogonForm";


class Logon extends Component {

    render() {
        return (
            <LogonForm {...this.props}/>
        );
    }
}

const mapStateToProps = state =>{
    return {
        logonData:state.logon
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        logonFn:bindActionCreators(logonActionCreactors,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Logon)