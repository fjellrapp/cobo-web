import { fetcher } from '$lib/utils/axios/instance';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { API_BASE_URL } from '$env/static/private';

const baseUrl = API_BASE_URL;
export const GET = (async ({ cookies }) => {
	const response = await fetcher(baseUrl, cookies).get(`users/getCurrentUser`);
	if (response.status === 200) {
		return json(response.data);
	}
	return json(`Error: ${response}`);
}) satisfies RequestHandler;
