import React from 'react'
import {Row, Column} from 'simple-flexbox'
import ChatComponent from "../chat"

function dashboardComponent(props) {
    return (
        <Row className="w-100 vh-100 margin-auto">
            <Column className="max-width-200 w-100 bg-light-grey">
                {
                    props.state.users && props.state.users.length ? props.state.users.map(user => {
                        return (<Row onClick={()=>props.changeSelectedUser(user)} className={"p-15 border-bottom-999 "+ (user._id === props.state.selectedUser._id ? "bg-light-cadetblue":"")}>
                            {user.username}
                        </Row>)
                    }) : ''
                }
            </Column>
            <Column className="w-100">
                <ChatComponent messages={props.state.messages} sendMessage={props.sendMessage}/>
            </Column>
        </Row>)
}

export default dashboardComponent;