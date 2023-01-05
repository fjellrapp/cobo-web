import { CoboAxios } from "$lib/utils/axios/instance";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const baseUrl = 'http://localhost:3000';
export const GET = (async (request) => {
    const response = await CoboAxios(request.cookies).get(`${baseUrl}/users/getCurrentUser`);
    if (response.status === 200) {
        return json(response.data)
    }
    return json(`Error: ${response}`);
    
}) satisfies RequestHandler