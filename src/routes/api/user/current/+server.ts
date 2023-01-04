import { json } from "@sveltejs/kit";
import axios from "axios";
import type { RequestHandler } from "./$types";

const baseUrl = 'http://localhost:3000';
export const GET = (async (request) => {
    console.log(request)
    const response = await axios.get(`${baseUrl}/users/getCurrentUser`);
    if (response.status === 200) {
        return json(response.data)
    }
    return json(`Error: ${response}`);
    
}) satisfies RequestHandler