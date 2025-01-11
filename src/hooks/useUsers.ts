import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { User } from "../lib/types.ts";

export const useUsers = (sortOrder: string) => {
  const ITEMS_PER_PAGE = 16; // Max users per page
  const BASE_URL = "https://api.github.com/search/users"; //Base API host
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const [searchVal, setSearchVal] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Handler for search input change
  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    setPage(1); // Reset to first page on search input change
  }, []);

  // Change current page
  const goToPage = useCallback((page: number) => setPage(page), []);

  // Fetch users from API
  const fetchUsers = useCallback(
    async (query: string, pageNum: number) => {
      if (!query.trim()) {
        setUsers([]);
        setTotalCount(0);
        return;
      }

      setIsLoading(true);

      try {
        const params = new URLSearchParams({
          q: `${encodeURIComponent(query)} in:login`,
          sort: "repositories",
          order: sortOrder.toString(),
          page: pageNum.toString(),
          per_page: ITEMS_PER_PAGE.toString(),
        });

        const response = await fetch(`${BASE_URL}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });

        const data = await response.json();
        setUsers(data.items ?? []);
        setTotalCount(data.total_count ?? 0);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [sortOrder, TOKEN],
  );

  // Debounced effect to fetch users
  useEffect(() => {
    const debounceTimeout = setTimeout(() => fetchUsers(searchVal, page), 300);
    return () => clearTimeout(debounceTimeout);
  }, [fetchUsers, page, searchVal]);

  return {
    searchVal,
    handleSearchChange,
    users,
    totalCount,
    ITEMS_PER_PAGE,
    page,
    goToPage,
    isLoading,
    setIsLoading,
  };
};
