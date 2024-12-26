import { UsersData } from "./lib/types.ts";

const baseUrl = "https://api.github.com/search/users?";

export const findUsers = async (
  query: string,
  dataLimit: number,
  page: number,
) => {
  try {
    const queryParam =
      "q=" +
      encodeURIComponent(query + " in:login") +
      `&per_page=${dataLimit}` +
      `&page=${page}`;

    const response = await fetch(baseUrl + queryParam, {
      headers: { Accept: "application/vnd.github.text-match+json" },
    });

    const users: UsersData = await response.json();

    if (response.ok) return users;
  } catch (err) {
    console.error(err);
  }
};
