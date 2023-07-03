import { API_BASE_URL } from '$env/static/private';
import { fetcher } from '$lib/utils/axios/instance';
import type { SignUpModel } from '$lib/utils/models/interfaces/auth';
import { extractErrorMessage } from '$lib/utils/message/extractError';
import { isAxiosError } from '$lib/utils/validation/error';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
export const POST: RequestHandler = async ({ request }): Promise<Response> => {
	const model: SignUpModel = await request.json();
	try {
		const signupResponse = await fetcher(API_BASE_URL).post('auth/signup', model, {
			withCredentials: true
		});
		if (signupResponse.status > 200) {
			return new Response(JSON.stringify({ success: true }), {
				headers: { Location: '/' },
				status: 201
			});
		}
	} catch (e: unknown) {
		if (isAxiosError(e)) {
			const err = extractErrorMessage(e);

			throw error(err.status, err.error);
		}
	}
	throw error(400, new Error('Unexpected error'));
};
