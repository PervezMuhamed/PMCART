import axios from "axios";

export const login = async(dispatch:any,{email, password}:any)=> {
    try {
        dispatch({type:"loginRequest"});
        const {data} = await axios.post("/api/login", {email, password});
        console.log(data);
        dispatch({type:"loginSuccess", payload:data});
    } catch (error:any) {
        // console.log(error);
        dispatch({type:"loginFail", payload:error.response.data.message});
    }
}

export const clearAuthError = (dispatch:any)=>{
    dispatch({type:"clearError"})
}

export const register = async(dispatch:any, {userName, email, password}:any)=> {
    try {
        dispatch({type:"registerRequest"});
        // const config = {
        //     headers:{
        //         "content-type":"multipart/form-data"
        //     }
        // }
        const {data} = await axios.post("/api/register", {userName, email, password});
        console.log(data);
        dispatch({type:"registerSuccess", payload:data})
    } catch (error:any) {
        console.log(error);
        dispatch({type:"registerFail", payload:error.response.data.message})
    }
}

export const loadUser = async(dispatch:any, )=> {
    try {
        dispatch({type:"loadUserRequest"});
        const {data} = await axios.get("/api/myProfile");
        console.log(data);
        dispatch({type:"loadUserSuccess", payload:data})
    } catch (error:any) {
        console.log(error);
        dispatch({type:"loadUserFail", payload:error.response.data.message})
    }     
}