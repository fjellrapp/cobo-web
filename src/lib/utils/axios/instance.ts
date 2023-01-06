import type { Cookies } from "@sveltejs/kit";
import axios from "axios";

export const CoboAxios = (cookies: Cookies, refresh = false) => {
    const authorizationCookie = cookies.get('jwt');
    const refreshCookie = cookies.get('jwt-r');
    const instance = axios.create({baseURL: 'http://localhost:3000/', headers: {
        'Authorization': `Bearer ${refresh ? refreshCookie : authorizationCookie}`
    }})
    return instance;
} 