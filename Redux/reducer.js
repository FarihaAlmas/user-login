import { Cookies } from 'js-cookie';
import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAILURE
  } from './action';

  const initialStates = {
      users: {},
      errorMessage: '',
  };
  export const users = (state = initialStates, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state};
        case USER_LOGIN_FAILURE:
            return {...state, errorMessage: action.payload};
        case USER_LOGIN_SUCCESS:
            return {...state, users: action.payload };
        default:
            return state;
    };
  };
  