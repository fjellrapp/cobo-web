import { signIn } from "$lib/hooks/auth";
import { json } from "@sveltejs/kit"
import type { AxiosResponse } from "axios"
import type { RequestHandler } from "./$types";


export const POST = ( async ({cookies, request}) => {
    const {phone, password} = await request.json();
    const loginResponse = await signIn(phone, password).catch(e => console.log("error", e))
    
    if (loginResponse?.status === 200) {
        const response = loginResponse as AxiosResponse;
        const {access_token, refresh_token} = response.data 
        cookies.set('refresh', refresh_token, {path: '/', httpOnly: true, maxAge: 60 * 60 * 24 * 30});
        cookies.set('authorization', access_token, {path: '/', httpOnly: true, maxAge: 60 * 60 * 24});
        return json(response.data)
    }

    return json(new Error('Failed'));

}) satisfies RequestHandler