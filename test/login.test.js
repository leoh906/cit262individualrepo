// it ('Should say hello', () =>{console.log('Hello Leo')});
import {login} from '../utils/login.js';

it ('Should get login token',async()=>{
    const loginRequest = {
        userName:"har21076@byui.edu",
        password: "NPR@lei56mynom14",
    }
    
    const token = await login(loginRequest);
    console.log("Token" + token)
})