import { CoboAxios } from "$lib/utils/axios/instance";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({event, resolve}) => {
    const access = event.cookies.get('jwt');
    const refresh = event.cookies.get('jwt-r');

    if (!access && refresh) {
        console.log("acce", access, refresh)
        try {
            const tokensResponse = await CoboAxios(event.cookies, true).get('api/refresh');
            if (tokensResponse.status === 200) {
                const {access_token, refresh_token} = tokensResponse.data;
                console.log(access_token, refresh_token)
            }
        } catch (e) {
            console.log("real ", e)
        }
        return await resolve(event)
    }
    const response = await resolve(event)
    response.headers.set('Authorization', `Bearer ${access}`)
    return response
}) satisfies Handle