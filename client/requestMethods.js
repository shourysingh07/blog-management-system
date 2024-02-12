import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

const user = JSON.parse(localStorage?.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user)?.user;
const TOKEN = user && JSON.parse(user)?.token;
console.log("userssss",TOKEN);

export const userRequest= axios.create({
    baseURL: BASE_URL,
    headers:{ authorization: `Bearer ${TOKEN}` }
})