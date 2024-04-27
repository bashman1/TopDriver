import React from 'react';
import { createAlert, CheckConnectivity} from './CommonService';
import { useDispatch, useSelector } from 'react-redux';

export const baseUrl = "http://127.0.0.1:8000/api/"; 


export const postToServer = (url:any, data:any, request:any) => {
    try {
        let parameters:any = {};
        parameters['headers'] = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
        parameters['body'] = JSON.stringify(data);
        parameters['method'] = request 
        return fetch(baseUrl+url, parameters).then((res:any) => {
            return res.json();
        }).catch((error:any) => {
         
        CheckConnectivity()

        })
    } catch (error:any) {
       
        CheckConnectivity()

    }
}

export const postToServerWithToken = (url:any, data:any, request:any, token:any) => {
    try {
        let parameter:any = {};
        parameter['headers'] = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization':'Bearer '+ token };
        parameter['body'] = JSON.stringify(data);
        parameter['method'] = request
        return fetch(baseUrl+url, parameter).then((res:any) => {
       
            return res.json();
        }).catch((error:any) => {
            CheckConnectivity()
        });

    } catch (error:any) {
       
        CheckConnectivity()
    }
}