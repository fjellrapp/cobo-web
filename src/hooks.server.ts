import { API_BASE_URL } from "$env/static/private";
import { CoboAxios } from "$lib/utils/axios/instance";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({event, resolve}) => {
    const access = event.cookies.get('jwt');
    const refresh = event.cookies.get('jwt-r');

    if (!access && refresh) {
        try {
            const tokensResponse = await CoboAxios(event.cookies, true).get(`${API_BASE_URL}auth/refresh`);
            if (tokensResponse.status === 200) {
                const {access_token, refresh_token} = tokensResponse.data;
                event.cookies.set('jwt', access_token, {path: '/', httpOnly: true, secure: true, maxAge: 60 });
                event.cookies.set('jwt-r', refresh_token, {path: '/', httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 30});
            }
        } catch (e) {
            console.error("Could not refresh token", e)
        }
        return await resolve(event)
    }
    const response = await resolve(event)
    response.headers.set('Authorization', `Bearer ${access}`)
    return response
}) satisfies Handle