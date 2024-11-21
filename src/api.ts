const baseUrl = "https://api.github.com/search/users?";

export const findUsers = async (query: string) => {
  try {
    const queryParam = "q=" + encodeURIComponent(query + " in:login");
    const response = await fetch(baseUrl + queryParam + "&per_page=10", {
      headers: { Accept: "application/vnd.github.text-match+json" },
    });

    const users = await response.json();
    return users.items;
  } catch (err) {
    console.error(err);
  }
};
