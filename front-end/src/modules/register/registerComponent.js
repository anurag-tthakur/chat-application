import React from 'react'
import {Row, Column} from 'simple-flexbox'
function registerComponent(props) {
    return (<Row className="w-100 vh-100 margin-auto">
        <Column vertical={'center'} className="m-auto">
            <div className="display-flex justify-content-center">
                Enter your username
            </div>
            <input type="text" className="" id="username" onChange={props.onChangeEvent}/>
            <div className="display-flex justify-content-center">
                <button type="button" className="" onClick={props.onContinue}>
                    Continue
                </button>
            </div>
        </Column>
    </Row>)
}

export default registerComponent;