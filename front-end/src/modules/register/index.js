import React from "react";
import utility, {dispatchAction} from "../../utils";
import BaseComponent from '../baseComponent'
import RegisterComponent from './registerComponent'
import connect from "react-redux/es/connect/connect";
import {registerUserService} from "../../services/user"
import {eventConstants} from "../../common/constant";
import sessionManager from "../../services/sessionManager";
import {history} from "../../utils/history"

class Register extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({height: window.innerHeight});
    };

    onContinue = async () => {
        let userRes = await registerUserService({username: this.state.username});
        sessionManager.setDataInCookies(userRes, 'userDetails');
        dispatchAction(eventConstants.ADD_USER_EVENT, userRes);
        history.push('/home')
    }

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };


    render() {
        return (
            <RegisterComponent state={this.state}
                               onChangeEvent={this.onChangeEvent}
                               onContinue={this.onContinue}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Register);
