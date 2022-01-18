import axios from "axios";
import {BASE_URL} from "../utils/consts";

const $host = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true
})

export {
    $host
}
