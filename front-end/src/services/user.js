import {apiEndPoints, httpConstants} from "../common/constant";
import {httpService} from "./httpService";

export {
    registerUserService,
    getUsersService,
    addMessagesService,
    getMessagesService
}

async function registerUserService(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_BASE_URL + apiEndPoints.ADD_USER;
    return await sendRequest(requestData, url);
}

async function getUsersService(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_BASE_URL + apiEndPoints.GET_USERS;
    return await sendRequest(requestData, url);
}

async function addMessagesService(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_BASE_URL + apiEndPoints.ADD_MESSAGES;
    return await sendRequest(requestData, url);
}

async function getMessagesService(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_BASE_URL + apiEndPoints.GET_MESSAGES;
    return await sendRequest(requestData, url);
}

async function sendRequest(requestData, url) {
    return httpService(httpConstants.METHOD_TYPE.POST, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON}, requestData, url)
        .then(
            response => {
                if (!response.success || response.code !== 200 || !response.responseData)
                    return Promise.reject(response);
                return response.responseData;
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}