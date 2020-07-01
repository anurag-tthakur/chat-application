import Cookies from "universal-cookie";
import React from "react";
import ToastService from 'react-material-toast';

let moment = require('moment');

const toast = ToastService.new({
    place: 'topRight',
    duration: 1,
    maxCount: 2
});

const cookies = new Cookies();
const utility = {
    apiFailureToast,
    apiSuccessToast,
    getFormattedDate
};

function apiFailureToast(message) {
    toast.error(message ? message : "failure");
}

function apiSuccessToast(msg) {
    toast.success(msg ? msg : "success");
}

export const dispatchAction = (type, data) => {
    return dispatch => dispatch({type, data});
};

function getFormattedDate(date, format = 'LLLL') {
    return moment(date).format(format); // Wednesday, November 13, 2019 9:24 PM
}


export default utility;
