export default async function Delete(url, body, headers) {
  try {
      const response = await fetch(url, {
          method: 'DELETE',
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