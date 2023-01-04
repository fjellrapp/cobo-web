import type { Handle } from "@sveltejs/kit";

export const handle = (async ({event, resolve}) => {
    const access = event.cookies.get('authorization');
    const response = await resolve(event)
    response.headers.set('Authorization', `Bearer ${access}`)
    return response
}) satisfies Handle