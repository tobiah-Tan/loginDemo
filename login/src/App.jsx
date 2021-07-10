import React, {Component} from 'react';
import Logon from './components/Logon';
import Register from './components/Register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/*<Home/>*/}
                        <Route exact path="/" component={Home}/>
                        {/*<Logo/>*/}
                        {/*<Route path="/register" exact component={Register}/>*/}
                        <Route exact path="/logon" component={Logon}/>
                        {/*<Logon/>*/}
                        {/*<Route path="/Logon" exact component={Logon}/>?*/}
                        {/*<Register/>*/}
                        <Route exact path="/register" component={Register}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
