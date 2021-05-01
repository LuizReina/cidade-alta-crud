export const fetchData = async (urlParam) => {
  const data = await fetch(`https://my-json-server.typicode.com/cidadealta/exercise/${urlParam}`)
    .then((response) => (response.ok
      ? Promise.resolve(response.json()) : Promise.reject(response.json())));
  return data;
};

export default fetchData;
