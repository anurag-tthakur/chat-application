import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import AppRoutes from './routes';
import store from './store.js';
import * as serviceWorker from './serviceWorker';
import './assets/styles/custom.css';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRoutes component={AppRoutes}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// {
//     "StatusCode": 200,
//     "CollectionArn": "aws:rekognition:us-east-1:930290055087:collection/eagleeye",
//     "FaceModelVersion": "4.0"
// }