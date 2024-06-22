export const intialState = {
    loading:false,
    isAuthenticated:false
}

export const authReducer = (state:any, action:any)=>{
    switch(action.type) {
        case "loginRequest":
            return {
                ...state, loading:true
            }
        case "loginSuccess":
            return {
                loading:false, isAuthenticated:true, 
                user:action.payload.user,
            }
            case "loginFail":
            console.log(action.payload);
            return {
                ...state, loading:false, error:action.payload
            }
        case "clearError":
            return{
             ...state, error:undefined
            }
        case "registerRequest":
            return {
                ...state, loading:true
            }
        case "registerSuccess":
            console.log(action.payload);
            return {
                loading:false, isAuthenticated:true, 
                user:action.payload.Data,
            }
        case "registerFail":
            return {
                ...state, loading:false, error:action.payload
            }
        case "loadUserRequest":
        return {
            ...state, loading:true, isAuthenticated:false,
        }        
        case "loadUserSuccess":
            return{
                loading:false, isAuthenticated:true, user:action.payload.user

            }       
        case "loadUserFail":
            return {
                ...state, loading:false, error:action.payload
            }      
        default: return state;     
    }
}
