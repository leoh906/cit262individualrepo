import fetch from 'node-fetch';
// mjs stands for module js, we can't really work without it
const login = async (userName, password) => {

// We are making a promise, will do something, just not right away
// Valid JSON quotes are always double spaced

const options = {
    method: 'POST', // A post request gets data
    body: JSON.stringify({userName, password}), // The parameters are in shorthand, userName:userName, password:password
    headers: {
        'Content-Type':'application/json',
        'Accept':'Text'
    }
};

    const apiResponse = await fetch('http://localhost:3000/login', options); // If we don't do an await, we will get a promise instead
    const loginResponse = await apiResponse.text();

    return loginResponse;

}

export {login};


