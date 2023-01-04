import type { Handle, HandleFetch } from "@sveltejs/kit";

export const externalFetch = (async ({event, request, fetch}) => {
    const token = event.cookies.get('authorization');

console.log(token)
request.headers.set('Authorization', `Bearer ${token}`)
return fetch(request)
}) satisfies HandleFetch