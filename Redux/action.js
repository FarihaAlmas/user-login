import Cookies from 'js-cookie';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';


export const userLogin = (email, password, callback) => {
    return dispatch => {
      
        dispatch(userLoginRequest());
        
        if(!email || !password) {
            const error = "Email and password in required"
            dispatch(userLoginFailure(error));
       } else{
                 
        try {
           
                const response = {
                    auth: true,
                    token: 'jhgdfkdufgjsdbfwyrugjhurgjfhgiuerhgkjer'
                }
              
                    console.log(response);
                    dispatch(userLoginSuccess(response));

                    // setting Cookies 
                    Cookies.set('loggedIn', true);
                    
                    if(response.auth === true && !response.token == ''){
                       if(callback){
                           callback();
                       }
                      
                      }
            
        } catch(error) {
            
             dispatch(userLoginFailure(error));
            console.log("Error in user login failure");
        }
      }
    };
};

export const userLoginRequest = () => ({ 
     type: USER_LOGIN_REQUEST });

export const userLoginSuccess = (data) => ({ 
     type: USER_LOGIN_SUCCESS, 
    payload: data
}); 

export const userLoginFailure = (error) => ({ 
    type: USER_LOGIN_FAILURE,
     payload: error 
    });



