import { useCallback, useState } from "react";
import { UserDetailsType } from "../lib/types.ts";

export const useSelectedUser = (setIsLoading: (state: boolean) => void) => {
  const BASE_URL = "https://api.github.com/users";
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDetailsType | null>(
    null,
  );

  // Fetch users details from API
  const fetchUserDetails = useCallback(
    async (username: string) => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/${username}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        const data = await response.json();

        setSelectedUser(data ?? null);
        setIsOpen(true); // If the request is successful, we open a dialog box by clicking
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },

    [setIsLoading, TOKEN],
  );

  return { isOpen, setIsOpen, selectedUser, fetchUserDetails };
};
