import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await api('get', `/api/character`);

	if (response.status === 200) {
		const chars = await response.json();
		return {
			body: {
				todos: chars.results
			}
		};
	}

	return {
		status: response.status
	};
};
