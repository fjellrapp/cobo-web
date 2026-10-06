import { fetcher } from '#lib/utils/axios/instance';
import { API_BASE_URL } from '$app/env/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ cookies }) => {
	const response = await fetcher(API_BASE_URL, cookies).get(`users/getCurrentUser`);
	if (response.status === 200) {
		return json(response.data);
	}
	return json(`Error: ${response}`);
}) satisfies RequestHandler;
