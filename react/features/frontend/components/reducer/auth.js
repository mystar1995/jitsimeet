import {ReducerRegistry,set} from '../../../base/redux';
import {AUTH_USER,AUTH_LOGOUT, UPDATE_PROFILE} from './actionstype';


const STORE_NAME = "feature/frontend/auth";

let initalstate = {
    loggedin:false,
    userinfo:{}
}

if(window.localStorage.getItem("userinfo"))
{
    initalstate.loggedin = true;
    let userinfo = window.localStorage.getItem("userinfo");
    initalstate.userinfo = JSON.parse(userinfo);
}

ReducerRegistry.register(STORE_NAME,(state = initalstate,action)=>{
    switch(action.type)
    {
        case AUTH_USER:
            state = set(state,"loggedin",true);
            return set(state,"userinfo",action.userinfo);
        case AUTH_LOGOUT:
            state = set(state,"loggedin",false);
            return set(state,"userinfo",{});
        case UPDATE_PROFILE:
            window.localStorage.setItem("userinfo",JSON.stringify(action.userinfo));
            return set(state,"userinfo",action.userinfo);
        default:
            return state;

    }
})

