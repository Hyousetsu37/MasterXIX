export const baseClient = async <T>(
  endpoint: string,
  { ...customConfig }: RequestInit,
): Promise<T> => {
  const baseURL = import.meta.env.VITE_API_BASE_GITHUB_URL;
  const headers = {
    'Content-Type': 'application/json',
    ...customConfig.headers,
  };
  const config: RequestInit = {
    ...customConfig,
    headers,
  };

  try {
    const response = await fetch(`${baseURL}${endpoint}`, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Error reaching the API ${response.status} ${response.statusText}`,
      );
    }
    return response.json();
  } catch (error) {
    console.error(`[API Client Error] at ${endpoint}:`, error);
    throw error;
  }
};
