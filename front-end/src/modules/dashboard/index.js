import React from "react";
import utility, {dispatchAction} from "../../utils";
import BaseComponent from '../baseComponent'
import DashboardComponent from './dashboardComponent'
import connect from "react-redux/es/connect/connect";
import {addMessagesService, getMessagesService, getUsersService} from "../../services/user"

class Dashboard extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            users: [],
            selectedUser: {},
            messages:[]
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.getUsers()
    }

    updateWindowDimensions = () => {
        this.setState({height: window.innerHeight});
    };

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    changeSelectedUser = async (user) => {
        await this.setState({selectedUser: user})
        this.getMessages();
    }

    getMessages = async () => {
        const requestData = {
            "$or": [
                {
                    "sender.id": this.props.user.userDetails._id,
                    "receiver.id": this.state.selectedUser._id
                },
                {
                    "receiver.id": this.props.user.userDetails._id,
                    "sender.id": this.state.selectedUser._id
                }]
        };
        const messages = await getMessagesService(requestData).catch(err => {
            console.log("error ", err);
        });
        this.setState({messages});
    }

    sendMessage = async (message) => {
        const requestObj = {
            message: message,
            sender:{
                name: this.props.user.userDetails.username,
                id: this.props.user.userDetails._id
            },
            receiver:{
                name: this.state.selectedUser.username,
                id: this.state.selectedUser._id
            },
            addedOn: Date.now(),
            modifiedOn: Date.now(),
        }
        console.log("requestObj ", requestObj);
        let addMessageRes = await addMessagesService(requestObj);
    }

    getUsers = async () => {
        const users = await getUsersService().catch(err => {
            console.log(err);
        });
        await this.setState({users, selectedUser:users[0]});
        this.getMessages()
    }

    render() {
        return (
            <DashboardComponent state={this.state}
                                onChangeEvent={this.onChangeEvent}
                                onContinue={this.onContinue}
                                sendMessage={this.sendMessage}
                                changeSelectedUser={this.changeSelectedUser}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Dashboard);
