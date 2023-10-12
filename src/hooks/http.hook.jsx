export const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip",
    }
  ) => {
    const response = await fetch(url, { method, body, headers });
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    } else {
      const data = await response.json();
      return data;
    }
  };

  return { request };
};
