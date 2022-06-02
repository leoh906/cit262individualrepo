import express from "express";
import bodyParser from 'body-parser';


const application = express();

application.use(bodyParser.json());

application.post('/login',(loginRequest,loginResponse)=>{
    const userName = loginRequest.body.userName;
    const password = loginRequest.body.password; // We set up the body so it is easy to get the data we want.
    // Headers can include things like cookies, metadata about the request
    if(userName=="har21076@byui.edu" && password=="P@ssword") {
    loginResponse.send({Status:"LoggedIn"})
    } else{
        loginResponse.status(403);
        loginResponse.send({Status:"FailedLoggingIn"});
    }
});

application.get('/',(loginRequest,loginResponse)=>{res.send("Hello")});
application.listen(3000,()=>{console.log("Listening...")});