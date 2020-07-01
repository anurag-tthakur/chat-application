import {eventConstants} from "../common/constant";
import sessionManager from "../services/sessionManager";
const userDetails = sessionManager.getDataFromCookies('userDetails')
let initialState = {
    userDetails: userDetails ? userDetails: {},
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
        default:
            return state;
    }
}