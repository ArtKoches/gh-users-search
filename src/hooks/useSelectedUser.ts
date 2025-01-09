import { useCallback, useState } from "react";
import { UserDetailsType } from "../lib/types.ts";

export const useSelectedUser = (setIsLoading: (state: boolean) => void) => {
  const BASE_URL = "https://api.github.com/users";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDetailsType | null>(
    null,
  );

  console.log(selectedUser);

  const fetchUserDetails = useCallback(
    async (username: string) => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/${username}`);
        const data = await response.json();

        setSelectedUser(data ?? null);
        setIsOpen(true);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading],
  );

  return { isOpen, setIsOpen, selectedUser, fetchUserDetails };
};
