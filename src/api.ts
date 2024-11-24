import { UsersData } from "./lib/types.ts";

const baseUrl = "https://api.github.com/search/users?";

export const findUsers = async (query: string) => {
  try {
    const queryParam = "q=" + encodeURIComponent(query + " in:login");
    const response = await fetch(baseUrl + queryParam + "&per_page=12", {
      headers: { Accept: "application/vnd.github.text-match+json" },
    });
    const users: UsersData = await response.json();

    if (response.ok) return users;
  } catch (err) {
    console.error(err);
  }
};
