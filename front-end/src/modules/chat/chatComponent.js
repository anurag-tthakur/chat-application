import React from 'react'
import {Row, Column} from 'simple-flexbox'

function chatComponent(props) {
    return (
        <Row className="w-100 vh-100 margin-auto position-relative">
            <Column className="w-100">
                {/*<Row className="">{props.selectedUser ? props.selectedUser.username : ''}</Row>*/}

                {props.messages && props.messages.length ? props.messages.map(message => {
                    return (
                        <Row className="display-flex justify-content-end p-r-20 p-b-15">
                            <div className={"b-r-5 p-8-30 "+props.isReceiverIsCurrentUser(message.receiver)}>
                                {message.message}
                            </div>
                        </Row>)
                }) : ''}
                <Row className="position-absolute w-100 bottom-0 p-20">
                    <input type="text" className="w-100" onKeyPress={event => {
                        if (event.key === 'Enter')
                            props.sendMessage(props.state.message);
                    }}
                           id="message"
                           value={props.messageInput}
                           onChange={props.onChangeEvent}
                    />
                </Row>
            </Column>
        </Row>)
}

export default chatComponent;