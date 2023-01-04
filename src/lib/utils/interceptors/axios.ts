import { refresh } from "$lib/hooks/auth";
import axios, { type AxiosResponse } from "axios";

// Use a env variable
axios.interceptors.response.use(res => res, async error => {
    if (error.response.status === 401) {
        console.log("error", error.response)
        // refresh
        
        const refreshResult = await refresh();
        if (refreshResult.status === 200) {
            const token = (refreshResult as AxiosResponse).data?.accessToken; 
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        }
    }
    return error
});