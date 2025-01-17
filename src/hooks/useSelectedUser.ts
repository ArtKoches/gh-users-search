import { useCallback, useState } from "react";
import { UserDetailsType } from "../lib/types.ts";
import { useUsersStore } from "../store/useUsersStore.ts";

export const useSelectedUser = () => {
  const { setLoading, setOpen, setError } = useUsersStore();

  const BASE_URL = "https://api.github.com/users";
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  const [chosenUser, setChosenUser] = useState<UserDetailsType | null>(null);

  // Fetch users details from API
  const fetchUserDetails = useCallback(
    async (username: string) => {
      setLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/${username}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });

        if (!response.ok) setError(`Error: ${response.status}`);

        const data = await response.json();
        setChosenUser(data ?? null);
        setOpen(true); // Open a dialog on user select
      } catch (err) {
        if (err instanceof Error) setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    },

    [setLoading, setOpen, setError, TOKEN],
  );

  return { chosenUser, fetchUserDetails };
};
