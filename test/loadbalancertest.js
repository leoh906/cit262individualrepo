// it ('Should say hello', () =>{console.log('Hello Leo')});
import assert from 'assert';
// import { response } from 'express';
import fetch from 'node-fetch';

it ('Should get login token',async()=>{
    const response = await fetch('http://34.85.182.174 ');
    // console.log("Token" + token)
    const text = await response.text();
    assert.equal(text,"Hello");
})