export const get = async <T = unknown>(url: string): Promise<T> => {
  return fetch(url)
    .then((result) => result.json())
    .catch((error) => {
      console.error(error);

      throw new Error(error);
    });
};
