const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

async function client<T>(
  endpoint: string,
  { params, ...customConfig }: FetchOptions = {},
): Promise<T> {
  const headers = {
    'Content-Type': 'application/json',
    ...customConfig.headers,
  };
  const config: RequestInit = {
    ...customConfig,
    headers,
  };

  let url = `${BASE_URL}${endpoint}`;

  if (params) {
    url += `?${new URLSearchParams(params).toString()}`;
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `HTTP Error: ${response.status} ${response.statusText}`,
      );
    }
    if (response.status === 204) {
      return {} as T;
    }
    return await response.json();
  } catch (error) {
    console.error(`[API Client Error] at ${endpoint}:`, error);
    throw error;
  }
}

export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    client<T>(endpoint, { ...options, method: 'GET' }),
};
