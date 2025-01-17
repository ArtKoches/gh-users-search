import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { User } from "../lib/types.ts";
import { useUsersStore } from "../store/useUsersStore.ts";

export const useUsers = () => {
  const {
    ITEMS_PER_PAGE,
    query,
    setQuery,
    page,
    setPage,
    order,
    setTotalCount,
    setLoading,
    setError,
  } = useUsersStore();

  const BASE_URL = "https://api.github.com/search/users"; //Base API host
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  const [users, setUsers] = useState<User[]>([]);

  // Handler for search input
  const onQueryChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      setPage(1); // Reset to first page on search input change
      setError(null); // Reset errors message on search value change
    },

    [setQuery, setPage, setError],
  );

  // Fetch users from API
  const fetchUsers = useCallback(
    async (query: string, pageNum: number) => {
      if (!query.trim()) {
        setUsers([]);
        setTotalCount(0);
        return;
      }

      setLoading(true);

      try {
        const params = new URLSearchParams({
          q: `${encodeURIComponent(query)} in:login`,
          sort: "repositories",
          order: order.toString(),
          page: pageNum.toString(),
          per_page: ITEMS_PER_PAGE.toString(),
        });

        const response = await fetch(`${BASE_URL}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });

        if (!response.ok) setError(`Error: ${response.status}`);

        const data = await response.json();
        setUsers(data.items ?? []);
        setTotalCount(data.total_count ?? 0);
      } catch (error) {
        if (error instanceof Error) setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    },

    [ITEMS_PER_PAGE, TOKEN, order, setTotalCount, setLoading, setError],
  );

  // Debounce for fetch users
  useEffect(() => {
    const debounceTimeout = setTimeout(() => fetchUsers(query, page), 300);

    return () => clearTimeout(debounceTimeout);
  }, [query, fetchUsers, page]);

  return {
    onQueryChange,
    users,
  };
};
