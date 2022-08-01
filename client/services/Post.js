export default async function Post(url, body, headers) {
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              ...headers
          },
          body: JSON.stringify(body)
      });
      return response.json();
  } catch (e) {
      throw new Error(e);
  }
}