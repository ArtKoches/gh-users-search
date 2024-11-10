export const findUsers = async (login: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${login}`,
    );

    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};
