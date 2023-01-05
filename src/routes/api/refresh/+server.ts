import { json } from "@sveltejs/kit"
import axios, { AxiosError } from "axios"
import type { RequestHandler } from "../login/$types"

const refresh = async (refreshToken: string) => {
    try {
       return await axios.get(`localhost:3000/auth/refresh`, {headers: {
        "Authorization": `Bearer ${refreshToken}`
       }, withCredentials: true})
    } catch (e: unknown) {
     return e as AxiosError
    }
 }
export const GET = (async (request) => {
    const token = request.cookies.get('jwt-r');
    console.log("this is hte token", token)
     const refreshed = token && await refresh(token)
     return json(refreshed)

}) satisfies RequestHandler