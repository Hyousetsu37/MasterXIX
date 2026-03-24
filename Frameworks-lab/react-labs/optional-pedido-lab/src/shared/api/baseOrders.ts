export const baseOrders = async <T>(
	endpoint: string,
	{ ...customConfigs }: RequestInit,
): Promise<T> => {
	const baseUrl = import.meta.env.VITE_SERVER_API_URL;
	const headers = { 'Content-Type': 'application/json', ...customConfigs.headers };

	const config: RequestInit = { ...customConfigs, headers };
	try {
		const response = await fetch(`${baseUrl}${endpoint}`, config);
		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(
				errorData.message || `Error reaching the API ${response.status} ${response.statusText}`,
			);
		}
		return response.json();
	} catch (error) {
		console.error(`[API Client Error] at ${endpoint}: `, error);
		throw error;
	}
};
