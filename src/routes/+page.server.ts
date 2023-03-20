// since there's no dynamic data here, we can prerender
import type { PageServerLoad } from './$types';

// it so that it gets served as a static asset in production
export const load: PageServerLoad = async ({ cookies, params }) => {
	const token = cookies.get('jwt');

	return {
		params,
		token
	};
};
