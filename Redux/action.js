import Cookies from 'js-cookie';
import apirouter from '../src/api/apirouter';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const userLogin = (email, password, callback) => {
    return async dispatch => {
     dispatch(userLoginRequest());
     if(!email || !password) {
            const error = "Email and password in required"
             dispatch(userLoginFailure(error));
       } else{
            try {
          const response = await apirouter.post('/login', {email, password});   
                     dispatch(userLoginSuccess(response.data)); 
                         Cookies.set('loggedIn', true);
                        if(!response.data.token == ''){
                           if(callback){
                                callback();
                            }
                         }
            } catch(error) {
                error = "*Email or Password doesn't match"
                dispatch(userLoginFailure(error));
        }
      }
    };
};
export const userLoginRequest = () => ({ 
     type: USER_LOGIN_REQUEST 
    });
export const userLoginSuccess = (data) => ({ 
     type: USER_LOGIN_SUCCESS, 
    payload: data
    }); 
export const userLoginFailure = (error) => ({ 
    type: USER_LOGIN_FAILURE,
     payload: error 
    });



