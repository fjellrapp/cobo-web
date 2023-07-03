import { json } from '@sveltejs/kit';
import type { AxiosResponse } from 'axios';
import type { RequestHandler } from './$types';
import { fetcher } from '$lib/utils/axios/instance';
import { API_BASE_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ cookies, request }) => {
	const user = await request.json();
	try {
		const loginResponse = await fetcher(API_BASE_URL).post('auth/login', user, {
			withCredentials: true
		});
		if (loginResponse?.status === 200) {
			const response = loginResponse as AxiosResponse;
			const { access_token, refresh_token } = response.data;
			cookies.set('jwt-r', refresh_token, {
				path: '/',
				httpOnly: true,
				secure: true,
				maxAge: 60 * 60 * 24 * 30
			});
			cookies.set('jwt', access_token, { path: '/', httpOnly: true, secure: true, maxAge: 60 });
			return json(response.data);
		}
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw json(new Error(`Failed to login: ${e}`));
		}
		return json(new Error(`Unexpected error: ${e}`));
	}
	return json(new Error('Something unexpected happened at login'));
};
