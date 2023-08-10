export const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    // mode = "cors",
    headers = {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip",
      // "Access-Control-Allow-Origin": "*",
    }
  ) => {
    const response = await fetch(url, { method, body, headers });
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      return data;
    }
  };

  return { request };
};
