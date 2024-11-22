import { useEffect, useState } from "react";
import { UsersData } from "../lib/types.ts";
import { findUsers } from "../api.ts";

export const useUsers = (query: string) => {
  const [users, setUsers] = useState<UsersData>({ items: [], total_count: 0 });

  useEffect(() => {
    if (query) findUsers(query).then((users) => setUsers(users!));
  }, [query, setUsers]);

  return { users };
};
