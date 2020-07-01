import React from "react";
import utility, {dispatchAction} from "../../utils";
import BaseComponent from '../baseComponent'
import ChatComponent from './chatComponent'
import connect from "react-redux/es/connect/connect";
import {addMessagesService, getMessagesService} from "../../services/user"
import {eventConstants} from "../../common/constant";
import sessionManager from "../../services/sessionManager";

class Chat extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message:'',
            users: [{
                name: "Ayush"
            }, {
                name: "Deepak"
            }]
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({height: window.innerHeight});
    };

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    render() {
        return (
            <ChatComponent state={this.state}
                           messages= {this.props.messages}
                           sendMessage= {this.props.sendMessage}
                           onChangeEvent={this.onChangeEvent}
                           onContinue={this.onContinue}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Chat);
