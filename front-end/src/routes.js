import React from 'react';
import {Router, Route} from 'react-router-dom';
import Utility, {dispatchAction} from "./utils";
import LoaderComponent from "./modules/common/loader";
import socketIOClient from "socket.io-client";

import {
    DashboardComponent, RegisterComponent
} from "./modules"
import {history} from "./utils/history";
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from "react-redux";

const ENDPOINT = "http://localhost:3000";


class App extends React.Component {

    render() {
        let loader = this.props.user.loading ? <LoaderComponent/> : null;
        // const socket = socketIOClient(ENDPOINT);
        // socket.on("newMessage", data => {
        //     let messages = this.props.user.messages;
        //    console.log("event from server ", data,messages);
        // });
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    {loader}
                    <Switch>
                        <Route exact path={'/register'} component={RegisterComponent}/>
                        <Route exact path={'/home'} component={DashboardComponent}/>
                        <Redirect exact from='*' to="/register"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(App);