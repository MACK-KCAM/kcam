export default async function Put(url, body, headers) {
  try {
      const response = await fetch(url, {
          method: 'PUT',
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