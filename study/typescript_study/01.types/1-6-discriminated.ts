{

        // // function :login -> succes or fail
        // type SuccessState = {
        //     response:{
        //         body : string;
        //     }
        // };
        // type FailState = {
        //     reason:{
        //         body : string;
        //     }
        // };
        // type LoginState = SuccessState | FailState;
        // function isLogin():LoginState{
        //     return {
        //         response : {
        //             body : "LOGIN",
        //         }
        //     }
    
        // }
    
        // function printLoginState(state:LoginState){
        //     if('response' in state){
        //         console.log(`success! ${state.response.body}`)
        //     } else{
        //         console.log(`failed.. ${state.reason.body}`)
        //     }
        // }

        
        // function :login -> succes or fail
        type SuccessState = {
            result : 'success',
            response:{
                body : string;
            }
        };
        type FailState = {
            result : 'fail',
            reason:{
                body : string;
            }
        };
        type LoginState = SuccessState | FailState;
        function isLogin():LoginState{
            return {
                result : 'success',
                response : {
                    body : "LOGIN",
                }
            }
    
        }
    
        function printLoginState(state:LoginState){
            if(state.result === "success"){
                console.log(`success! ${state.response.body}`)
            } else{
                console.log(`failed.. ${state.reason.body}`)
            }
        }
}