/**
 * Created by GennadySX on @2020
 */
import http from 'axios'
import {API} from "../constants/API";

const token = localStorage.getItem('token')

const x = (controller, method, data = null, headers = null) => http(
    {
        url: `${API.origin}${controller}`,
        method: method,
        data: data,
        headers: {
            'Authorization': token,
            'Content-type': "application/json",
            'Accept': 'application/json',
            ...headers
        }
    });

const axios = {
    get: (controller, headers = null) => x(controller, 'GET', null, headers),
    post: (controller, data, headers = null) => x(controller, 'POST', data, headers),
    update: (controller, data, headers = null) => x(controller, 'UPDATE', data, headers),
    del: (controller, headers = null) => x(controller, 'GET', null, headers),
}

export {
    axios
}
