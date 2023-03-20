import type { Cookies } from '@sveltejs/kit';
import axios from 'axios';

export const fetcher = (basePath: string, cookies?: Cookies, refresh = false) => {
	if (!cookies) {
		return axios.create({ baseURL: basePath });
	}
	const authorizationCookie = cookies.get('jwt');
	const refreshCookie = cookies.get('jwt-r');
	const instance = axios.create({
		baseURL: basePath,
		headers: {
			Authorization: `Bearer ${refresh ? refreshCookie : authorizationCookie}`
		}
	});
	return instance;
};
