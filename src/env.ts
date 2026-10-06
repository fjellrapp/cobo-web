import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	API_BASE_URL: {
		schema: (value) => {
			if (value === undefined) {
				throw new Error('API_BASE_URL must be configured');
			}

			new URL(value);
			return value;
		},
		description: 'Base URL for the Cobo API'
	}
});
