import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { User } from "../lib/types.ts";

export const useUsers = () => {
  // max data(users) limit per page
  const itemsPerPage = 25;

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);

  const goToPage = useCallback((page: number) => setPage(page), []);

  // fetch users...
  const fetchUsers = useCallback(async (query: string, pageNum: number) => {
    if (!query.trim()) {
      setUsers([]);
      setTotalCount(0);
      return;
    }

    try {
      const baseUrl = "https://api.github.com/search/users";
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const params = new URLSearchParams({
        q: `${encodeURIComponent(query)} in:login`,
        page: pageNum.toString(),
        per_page: itemsPerPage.toString(),
      });

      console.log(params.toString());
      console.log(token);

      const response = await fetch(`${baseUrl}?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(data.items ?? []);
      setTotalCount(data.total_count ?? 0);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // debounce fetch
  useEffect(() => {
    const timeoutId = setTimeout(() => fetchUsers(search, page), 300);
    return () => clearTimeout(timeoutId);
  }, [fetchUsers, page, search]);

  return {
    search,
    onChange,
    users,
    totalCount,
    itemsPerPage,
    page,
    goToPage,
  };
};
