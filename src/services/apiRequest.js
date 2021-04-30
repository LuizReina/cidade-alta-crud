export const fetchPenalCode = async () => {
  const data = await fetch('https://my-json-server.typicode.com/cidadealta/exercise/codigopenal')
    .then((response) => (response.ok
      ? Promise.resolve(response.json()) : Promise.reject(response.json())));
  return data;
};

export const fetchStatus = async () => {
  const data = await fetch('https://my-json-server.typicode.com/cidadealta/exercise/status')
    .then((response) => (response.ok
      ? Promise.resolve(response.json()) : Promise.reject(response.json())));
  return data;
};
