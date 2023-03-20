import type { PageLoad } from './$types';

// it so that it gets served as a static asset in production
export const prerender = true;
export const load: PageLoad = ({ params }) => {
	return {
		params
	};
};
