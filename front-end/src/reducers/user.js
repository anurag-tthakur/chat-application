import {eventConstants} from "../common/constant";
import sessionManager from "../services/sessionManager";
const userDetails = sessionManager.getDataFromCookies('userDetails')
const messages = sessionManager.getDataFromCookies('messages')
let initialState = {
    userDetails: userDetails ? userDetails: {},
    messages: messages ? messages:{},
    loading: false
};


export default function user(state = initialState, action) {
    switch (action.type) {
        case eventConstants.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case eventConstants.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case eventConstants.ADD_USER_EVENT:
            return {
                ...state,
                userDetails: action.data
            };

        case eventConstants.MESSAGES:
            return {
                ...state,
                messages: action.data
            };
        default:
            return state;
    }
}