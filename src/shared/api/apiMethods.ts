const BASE_URL = 'https://www.thecocktaildb.com';

export const get = async <T = unknown>(url: string): Promise<T> => {
  return fetch(BASE_URL + url)
    .then((result) => result.json())
    .catch((error) => {
      console.error(error);

      throw new Error(error);
    });
};
