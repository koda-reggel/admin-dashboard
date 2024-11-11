import axios, { Axios } from "axios";

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    header:{
        "x_Requested-Width": "XMLHttpRequest"
    },
    withCredentials:true
});

export default axios;