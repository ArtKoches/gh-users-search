import { useEffect, useState } from "react";
import { UsersData } from "../lib/types.ts";
import { findUsers } from "../api.ts";

export const useUsers = (query: string, page: number) => {
  const [users, setUsers] = useState<UsersData>({ items: [], total_count: 0 });
  const dataLimit = 27;

  useEffect(() => {
    if (query) {
      findUsers(query, dataLimit, page).then((users) => setUsers(users!));
    } else {
      setUsers({ items: [], total_count: 0 });
    }
  }, [query, page]);

  return { users };
};
