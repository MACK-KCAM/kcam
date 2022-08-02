export default async function Get(url, body, headers) {
  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              ...headers
          },
          body
      });
      console.log("Get response: ", response)
      return response.json();
  } catch (e) {
      throw new Error(e);
  }
}