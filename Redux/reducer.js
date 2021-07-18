import { Cookies } from 'js-cookie';
import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAILURE
  } from './action';

  const initialStates = {
      users: [],
      errorMessage: '',
      token: '',
      auth: false
  };

  export const users = (state = initialStates, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state};
         case USER_LOGIN_FAILURE:
             return {...state, errorMessage: action.payload};
        case USER_LOGIN_SUCCESS:
            console.log("iside the user login success reducer");
            console.log(action.payload);
              
        // const login = {
         // const auth = action.payload.auth,
         const token = action.payload.token
         const auth = action.payload.auth
        // }
        // const isloggedin = Cookies.set('loggedin', true)
      //  const {auth, token} = action.payload;
        console.log("the vlue of the login is being printed")
        console.log("value of token", token)
        console.log("value of auth", auth)
       //  Cookies.set('loggedIn', auth);
       //  return {...state, state: state.concate(action.payload) };
                //  return {...state, state: append(payload, state) };
          return {...state, token:token, auth:auth, errorMessage: '' };

        default:
            return state;
    };
  };
  